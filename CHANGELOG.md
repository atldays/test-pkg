# Changelog

## 🚀 Release `@young-money/test-pkg` v1.3.0 (2025-10-01)

### ✨ Features

* add `subtract` function to arithmetic utilities ([badb23e](https://github.com/atldays/test-pkg/commit/badb23ee55e641c8842b3cd18eaef0893a0cd0c2))

  - Introduced a new `subtract` function to perform subtraction of two numbers.
  - Included input validation to ensure arguments are of type `number`.

## 🚀 Release `@young-money/test-pkg` v1.2.0 (2025-10-01)

### ✨ Features

* enhance release-it configuration and CI workflow ([b38fcc9](https://github.com/atldays/test-pkg/commit/b38fcc90130dc217597cc97429972159d9361392))

  - Updated `release` and `release:ci` scripts to include verbose logging and custom config path.
  - Refined `.release-it.cjs` with normalized repo URL function and explicit changelog handling.
  - Improved commit filtering by strictly excluding merge commits.
  - Added `DEBUG` and `HUSKY` environment variables to GitHub Actions workflow.
  - Enhanced release process by ensuring GitHub receives accurate changelog details.

* improve release-it configuration for conventional commits ([a8e72b5](https://github.com/atldays/test-pkg/commit/a8e72b507cb1ea9bcfad2f9e9be18b86db0e12cc))

  - Updated `release:ci` script to include `--increment=conventional` for automated versioning.
  - Added `@release-it/conventional-changelog` to `.release-it.cjs` for better changelog handling.
  - Disabled auto increment in `.release-it.cjs` to rely on conventional commit logic.


### 🧹 Chores

* remove unused `conventionalChangelog` import from `.release-it.cjs` ([ba2779a](https://github.com/atldays/test-pkg/commit/ba2779ab5be1d3c697bb3d738c52d133b0a31dab))



### 🛠️ Refactoring

* remove redundant `release:ci` script and simplify `.release-it.cjs` config ([4685cfb](https://github.com/atldays/test-pkg/commit/4685cfbb040f916e1e426b358747fb9aececed89))

  - Removed the `release:ci` script from `package.json` as it is no longer needed.
  - Deleted the unused `increment` property from `.release-it.cjs` for cleaner configuration.

* simplify `normalizeRepoUrl` function in release-it config ([481543b](https://github.com/atldays/test-pkg/commit/481543bf03651eca5ec21a97d20c17c888f4cc46))

* Merge pull request #11 from atldays/develop (02aeb9b)
* fix: add `conventional-commits-parser` dependency for dev tooling (b83bbb4)
* fix: update dependencies and add overrides for dev tooling (534c901)
* fix: update dependencies and add overrides for dev tooling (8b95eb5)
* Merge main into develop (6595ef8)

* Merge pull request #10 from atldays/develop (5265094)
* ci: update release-it and workflow configuration for improved release process (a62519b)
* Merge main into develop (ef9da65)

* Merge pull request #9 from atldays/develop (5ff5871)
* refactor: enhance release-it configuration for better customization (0ecb2b7)
* Merge main into develop (3c1f45a)

* Merge pull request #8 from atldays/develop (dcf4c22)
* fix: update release-it config for customization and readability (0248223)
* Merge main into develop (46455d2)

* Merge pull request #7 from atldays/develop (94edab2)
* ci: add branch sync step to release workflow (9c2cd04)

* Merge pull request #6 from atldays/develop (f52bd51)
* Merge pull request #5 from atldays/develop (b351401)
* Merge pull request #4 from atldays/develop (2f83652)
* Merge pull request #3 from atldays/develop (7abd634)
* Merge pull request #2 from atldays/develop (0e9d195)
* Merge pull request #1 from atldays/release/next (3d32fff)

All notable changes to this project will be documented in this file. The format is based on Conventional Commits.

This file is maintained automatically by release-it and @release-it/conventional-changelog.
