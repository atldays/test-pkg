const pkg = require("./package.json");

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
    ["revert", "⏪ Reverts"]
]);

const repoUrl = pkg && pkg.repository && pkg.repository.url ? pkg.repository.url.replace(/\.git$/, "") : null;


/** @type {import('release-it').Config} */
module.exports = {
    ci: true,

    git: {
        tagName: "v${version}",
        tagAnnotation: "v${version}",
        requireUpstream: false,
        push: true,
        commitMessage: "chore(release): v${version}",
        commitArgs: "--no-verify",
    },

    github: {
        release: true,
        releaseName: "v${version}",
        tokenRef: "GITHUB_TOKEN",
        autoGenerate: false,
    },

    npm: {
        publish: true,
        versionArgs: ["--no-git-tag-version"],
        publishArgs: ["--provenance", "--access", "public"],
        tokenRef: "NPM_TOKEN",
    },

    increment: "conventional",

    plugins: {
        "@release-it/conventional-changelog": {
            infile: "CHANGELOG.md",
            header: "# Changelog\n",
            preset: {
                name: "conventionalcommits",
            },
            presetConfig: {
                types: [...types.entries()]
                    .map(([type, section]) => ({type, section})),
            },

            context: {
                name: pkg.name,
                pkg: {name: pkg.name},
                repoUrl,
            },

            gitRawCommitsOpts: {merges: false},

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
                mainTemplate:
                    "{{> header}}\n" +
                    "{{#each commitGroups}}\n### {{title}}\n\n{{#each commits}}{{> commit root=@root}}\n{{/each}}\n\n{{/each}}" +
                    "{{#unless commitGroups}}\n{{#each commits}}{{> commit root=@root}}\n{{/each}}{{/unless}}",
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
