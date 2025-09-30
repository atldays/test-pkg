/** @type {import('release-it').Config} */
module.exports = {
    ci: true,

    git: {
        tagName: "v${version}",
        tagAnnotation: "Release v${version}",
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
                types: [
                    {type: "feat", section: "✨ Features"},
                    {type: "fix", section: "🐛 Bug Fixed"},
                    {type: "perf", section: "⚡️ Performance Improvements"},
                    {type: "refactor", section: "🛠️ Refactoring"},
                    {type: "docs", section: "📝 Documentation"},
                    {type: "test", section: "🧪 Tests"},
                    {type: "build", section: "🏗️ Build System"},
                    {type: "ci", section: "🤖 CI"},
                    {type: "chore", section: "🧹 Chores"},
                    {type: "revert", section: "⏪ Reverts"},
                    {type: "style", section: "🎨 Styles"},
                ],
            },

            gitRawCommitsOpts: {merges: false},

            recommendedBumpOpts: {
                preset: "conventionalcommits",
                whatBump: commits => {
                    let hasBreaking = false;
                    let hasFeat = false;
                    let hasPatch = false;

                    for (const c of commits) {
                        if (c.notes && c.notes.some(n => /BREAKING CHANGE/i.test(n.title || n.text || ""))) {
                            hasBreaking = true;

                            break;
                        }

                        const type = (c.type || "").toLowerCase();

                        if (type === "feat") {
                            hasFeat = true;
                        }

                        if (["fix", "perf", "refactor", "ci"].includes(type)) {
                            hasPatch = true;
                        }
                    }

                    if (hasBreaking) return {level: 0};
                    if (hasFeat) return {level: 1};
                    if (hasPatch) return {level: 2};

                    return null;
                },
            },
        },
    },
};
