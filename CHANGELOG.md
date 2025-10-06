# Changelog

## 🚀 Release `@young-money/test-pkg` v3.0.1 (2025-10-06)

### 🧹 Chores

* **changelog:** include refactor! commits and unknown types ([01c004d](https://github.com/atldays/test-pkg/commit/01c004d2659217e0204a81c8d75405929f5de8e4))





### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v3.0.0 (2025-10-06)




### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 4 commits

## 🚀 Release `@young-money/test-pkg` v2.0.0 (2025-10-06)




### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v1.7.3 (2025-10-06)

### 🛠️ Refactoring

* inline `getContributors` logic into `.release-it.cjs` for simplicity ([1513106](https://github.com/atldays/test-pkg/commit/15131066b7a9d8eb3d7cc4c11d7c51fe9e41f86f))

  - Removed `scripts/git.cjs` and transferred `getContributors` logic directly into `.release-it.cjs`.
  - Updated release footer template to conditionally include GitHub usernames.




### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v1.7.2 (2025-10-06)

### 🐛 Bug Fixed

* improve contributor deduplication and enhance release notes ([d3ba3dd](https://github.com/atldays/test-pkg/commit/d3ba3dd8a1b67c3a147cb3ed95de3063914c3a74))

  - Refactored `git.cjs` to introduce `Map` for better contributor deduplication logic.
  - Filtered out bot contributors based on names and emails.
  - Enhanced `.release-it.cjs` to include commit count per contributor in release notes.




### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v1.7.1 (2025-10-06)

### 🛠️ Refactoring

* improve email parsing logic and adjust contributor footer formatting ([bddc965](https://github.com/atldays/test-pkg/commit/bddc965307976760e892d42f59e72b1bae88d393))

  - Updated `git.cjs` to enhance readability and maintainability of the email parsing logic.
  - Adjusted `.release-it.cjs` to use consistent heading levels for the contributor footer.




### 🙌 Contributors

- [@atldays](https://github.com/atldays) — Anjey Tsibylskij
- [@atldays](https://github.com/atldays) — Anjey Tsibylskij

## 🚀 Release `@young-money/test-pkg` v1.7.0 (2025-10-02)

### ✨ Features

* enhance release workflow and update dependencies ([0b5384f](https://github.com/atldays/test-pkg/commit/0b5384f1dc9ce28d1ed0e797a3e99c721b98ef58))

  - Integrated dynamic contributors retrieval into release process.
  - Added `getContributors` script for generating contributor lists.
  - Updated `.release-it.cjs` configuration to include contributor details in release notes.


### 🛠️ Refactoring

* simplify contributor mapping logic and update dependencies ([94f362a](https://github.com/atldays/test-pkg/commit/94f362a6daabd5da835bd764b8e0746fa540e142))

  - Refactored `git.cjs` to simplify arrow function syntax in mapping and filtering logic.
  - Updated `package-lock.json` to include `conventional-commits-parser` as a dependency.
  - Adjusted `.release-it.cjs` for improved readability of breaking change checks.




#### 🙌 Contributors

- Anjey Tsibylskij <anjey.tsibylskij@gmail.com>
- [@atldays](https://github.com/atldays) — atldays

## 🚀 Release `@young-money/test-pkg` v1.6.1 (2025-10-02)

## 🚀 Release `@young-money/test-pkg` v1.6.0 (2025-10-02)

### ✨ Features

* bump package version to 1.4.0 ([e7f7852](https://github.com/atldays/test-pkg/commit/e7f78525153fbb2b54ec2c390d165e6da8dd1849))


* bump package version to 1.5.0 ([30ebbcb](https://github.com/atldays/test-pkg/commit/30ebbcbfff628d6fa6bce0bcd03afb557b6ab4bb))


* **fix:** bump package version to 1.3.3 ([90c1d10](https://github.com/atldays/test-pkg/commit/90c1d10eaf4e5391a99ef44e92e953b457b932e6))



### 🐛 Bug Fixed

* **husky:** simplify pre-commit and pre-push hooks ([c45d8f9](https://github.com/atldays/test-pkg/commit/c45d8f9797e5f502c111eb6f66e46e6f670d909f))

  - Removed `main` branch protection logic from `pre-commit` and `pre-push` hooks.
  - Streamlined hooks to focus on running linting, type checks, tests, and build tasks.
  - Simplified execution logic for enhanced maintainability.


### 🤖 CI

* refine workflow triggers and simplify tag fetching ([e9fe0ff](https://github.com/atldays/test-pkg/commit/e9fe0ff3b002f761daddd62cbf4544ea90737ee3))

  - Removed `main` and `release/**` branches from `pull_request` trigger in `ci.yml`.
  - Simplified tag fetching in `release.yml` by utilizing `fetch-tags: true`.

* **release:** enhance release workflow with dynamic inputs ([bfcb0e0](https://github.com/atldays/test-pkg/commit/bfcb0e07c1d9cea2816959b0e7b90562848469a9))

  - Added support for dynamic inputs (`version`, `preid`, `npm_tag`) to trigger custom releases.
  - Improved flexibility for pre-releases and npm dist-tag management.
  - Updated release-it command to accommodate new input arguments.

* update workflows to improve branch handling and tag fetching ([6bf32b7](https://github.com/atldays/test-pkg/commit/6bf32b70c4d5b9678dd87c345b4757384ecc074b))

  - Added `main` and `release/**` branches for `pull_request` trigger in `ci.yml`.
  - Updated `release.yml` to force-fetch all Git tags for accurate release processing.


### 🧹 Chores

* bump package version to 1.3.2 ([85bc6c6](https://github.com/atldays/test-pkg/commit/85bc6c6cecb05fae019dafa34f0df442baa0ff3f))


* **CHANGELOG:** remove old history for cleaner changelog maintenance ([fc89386](https://github.com/atldays/test-pkg/commit/fc89386192f7532e7831a76ec1cd0517ec1b0dc0))


* **gitignore:** add `.DS_Store` to ignore list ([66598ee](https://github.com/atldays/test-pkg/commit/66598ee7661b08e37353984523a27d681a6e54b6))


* **husky:** prevent direct commits and pushes to `main` ([18b6f28](https://github.com/atldays/test-pkg/commit/18b6f286d495e6905bacd930e3edb2e369279292))

  - Updated `pre-commit` hook to block direct commits to `main` and added CI bypass.
  - Enhanced `pre-push` hook to block direct pushes to `main`, including fallback checks.
  - Added user-friendly error messages guiding contributors to use feature branches and PRs.

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
