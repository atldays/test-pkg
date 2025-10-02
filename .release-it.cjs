const pkg = require("./package.json");
const {getContributors} = require("./scripts/git.cjs");

const types = new Map([
    ["feat", "✨ Features"],
    ["fix", "🐛 Bug Fixed"],
    ["perf", "⚡️ Performance Improvements"],
    ["refactor", "🛠️ Refactoring"],
    ["docs", "📝 Documentation"],
    ["test", "Tests"],
    ["build", "🏗️ Build System"],
    ["ci", "🤖 CI"],
    ["chore", "🧹 Chores"],
    ["revert", "⏪ Reverts"],
]);

const normalizeRepoUrl = url => url.replace(/^git\+/, "").replace(/\.git$/, "");
const repoUrl = pkg && pkg.repository && pkg.repository.url ? normalizeRepoUrl(pkg.repository.url) : null;

module.exports = () => {
    const contributors = getContributors();

    return {
        ci: true,

        git: {
            requireCleanWorkingDir: true,
            requireUpstream: false,
            requireBranch: false,
            commit: true,
            commitMessage: "chore(release): v${version}",
            tag: true,
            tagName: "v${version}",
            tagAnnotation: "v${version}",
            push: true,
        },

        github: {
            release: true,
            releaseName: "v${version}",
            autoGenerate: false,
            // Ensure GitHub receives exactly the generated changelog body
            releaseNotes: ({changelog}) => changelog,
        },

        npm: {
            publish: true,
            versionArgs: ["--no-git-tag-version"],
            publishArgs: ["--provenance", "--access", "public"],
        },

        plugins: {
            "@release-it/conventional-changelog": {
                infile: "CHANGELOG.md",
                preset: "conventionalcommits",

                presetConfig: {
                    types: [...types.entries()].map(([type, section]) => ({type, section, hidden: false})),
                },

                context: {
                    name: pkg.name,
                    pkg: {name: pkg.name},
                    repoUrl,
                    contributors,
                },

                // Strictly exclude merge commits
                gitRawCommitsOpts: {merges: false, noMerges: true},

                recommendedBumpOpts: {
                    preset: "conventionalcommits",
                    whatBump: commits => {
                        let isMajor = false;
                        let isMinor = false;
                        let isPatch = false;

                        for (const commit of commits) {
                            if (commit.notes && commit.notes.some(n => /BREAKING CHANGE/i.test(n.title || n.text || ""))) {
                                isMajor = true;
                                break;
                            }

                            const type = (commit.type || "").toLowerCase();

                            if (type === "feat") {
                                isMinor = true;
                            }

                            if (["fix", "perf", "refactor", "ci"].includes(type)) {
                                isPatch = true;
                            }
                        }

                        if (isMajor) return {level: 0};
                        if (isMinor) return {level: 1};
                        if (isPatch) return {level: 2};

                        return null;
                    },
                },
                writerOpts: {
                    headerPartial:
                        "## 🚀 Release {{#if name}}`{{name}}` {{else}}{{#if @root.pkg}}`{{@root.pkg.name}}` {{/if}}{{/if}}v{{version}} ({{date}})\n\n",
                    footerPartial: `{{#if @root.contributors.length}}\n#### 🙌 Contributors\n\n{{#each @root.contributors}}- {{#if url}}[@{{login}}]({{url}}){{#if name}} — {{name}}{{/if}}{{else}}{{name}}{{#if email}} <{{email}}>{{/if}}{{/if}}\n{{/each}}{{/if}}`,
                    mainTemplate:
                        "{{> header}}\n" +
                        "{{#each commitGroups}}\n### {{title}}\n\n{{#each commits}}{{> commit root=@root}}\n{{/each}}\n\n{{/each}}" +
                        "{{#unless commitGroups}}\n{{#each commits}}{{> commit root=@root}}\n{{/each}}{{/unless}}\n\n" +
                        "{{> footer}}",
                    commitPartial:
                        "{{#if type}}* {{#if scope}}**{{scope}}:** {{/if}}{{#if subject}}{{subject}}{{else}}{{header}}{{/if}}{{#if href}} ([{{shorthash}}]({{href}})){{/if}}\n\n{{#if body}}{{{body}}}\n{{/if}}{{/if}}",
                    groupBy: "type",
                    commitGroupsSort: "title",
                    commitsSort: ["scope", "subject"],
                    transform: commit => {
                        const nextCommit = {...commit};

                        const type = (nextCommit.type || "").toLowerCase();
                        const section = types.get(type);

                        if (section) {
                            nextCommit.type = section;
                        } else {
                            return false;
                        }

                        if (nextCommit.body) {
                            const body = nextCommit.body.replace(/\r\n/g, "\n").trim();

                            nextCommit.body = body
                                .split("\n")
                                .map(line => (line ? "  " + line : ""))
                                .join("\n");
                        }

                        if (!nextCommit.href && nextCommit.hash && repoUrl) {
                            nextCommit.href = `${repoUrl}/commit/${nextCommit.hash}`;
                        }

                        if (!nextCommit.shorthash && nextCommit.hash) {
                            nextCommit.shorthash = nextCommit.hash.slice(0, 7);
                        }

                        return nextCommit;
                    },
                },
            },
        },
    };
};
