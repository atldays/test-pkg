# Changelog

## 🚀 Release `@young-money/test-pkg` v1.3.1 (2025-10-01)

### ⚡️ Performance Improvements

* **subtract:** add unit tests for `add` and `subtract` functions ([2c33347](https://github.com/atldays/test-pkg/commit/2c333472365ee2f0cc7e00e3ee31684a6ee851d9))

  - Introduced comprehensive tests for the `add` function,
    including validations for positive, negative, and invalid inputs.
  - Added tests for the newly implemented `subtract` function,
    covering various scenarios like decimals, zero handling, and input validation.

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