# Changelog

## 🚀 Release `@young-money/test-pkg` v7.0.6 (2026-01-17)


### 🤖 CI

* refine release workflow and code formatting ([d4440e4](https://github.com/atldays/test-pkg/commit/d4440e45580fa0f22e8d6458680cf7300333fbbf))





### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v7.0.5 (2026-01-17)


### 🤖 CI

* enhance release workflow with OIDC verification and manual npm publish ([aec5846](https://github.com/atldays/test-pkg/commit/aec5846c97dcf7b3f728fdf441b575fa8641b993))

  - Added a step to verify OIDC setup in `release.yml` for trusted publishing.
  - Introduced a manual `npm publish` step with provenance support and tag specification.
  - Disabled `npm.publish` in `.release-it.cjs` to delegate publishing to the CI process.

* remove unnecessary npm auth configuration in release workflow ([f7efab9](https://github.com/atldays/test-pkg/commit/f7efab961cdd653d288a7231f5fac8f70fd413ce))

  - Removed redundant `registry-url` and `always-auth` configuration from the Node.js setup step.
  - Dropped unused `NPM_TOKEN` and `NODE_AUTH_TOKEN` secrets to simplify the workflow.
  - Enabled `skipChecks` in `.release-it.cjs` to bypass npm pre-publish verification.

* update release workflow for npm registry and release-it integration ([aaab501](https://github.com/atldays/test-pkg/commit/aaab50165c2e375ed38e47eb83aac8eec4deb931))

  - Added permissions for `contents` and `id-token` in the release workflow.
  - Configured npm registry setup step in `release.yml`.
  - Replaced `npm run release` with `npx release-it` for consistency.
  - Updated `.release-it.cjs` to specify registry URL in `publishArgs`.




### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 6 commits

## 🚀 Release `@young-money/test-pkg` v7.0.4 (2025-10-06)


### 🤖 CI

* fix conditional logic in CI workflow ([158e176](https://github.com/atldays/test-pkg/commit/158e176ad917170b8226ab25f1650165d6856681))





### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v7.0.3 (2025-10-06)


### 🤖 CI

* fix syntax error in condition block of CI workflow ([d889c9b](https://github.com/atldays/test-pkg/commit/d889c9b7ea88976b07be1c6617f8203f960e910c))


* refactor CI workflows for dynamic matrix computation ([6011a83](https://github.com/atldays/test-pkg/commit/6011a83ed3d50b3d51c364f4642f3938aeb9605d))

  - Introduced a `compute-matrix` job to dynamically define the build matrix based on workflow inputs.
  - Consolidated full and reduced matrix builds into a single `build-and-test` job.
  - Simplified matrix definitions and improved reusability with outputs from `compute-matrix`.




### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 3 commits

## 🚀 Release `@young-money/test-pkg` v7.0.2 (2025-10-06)


### 🤖 CI

* simplify CI workflows and reduce matrix complexity ([a4330b1](https://github.com/atldays/test-pkg/commit/a4330b19f325936cd98501989a250a6e98ac88aa))

  - Unified conditional logic in `ci.yml` for `build-and-test-reduced` and `build-and-test-full` jobs.
  - Removed matrix strategy and hardcoded Node.js version to `20` in `build-and-test-reduced`.
  - Adjusted artifact naming to reflect the single Node.js version.




### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v7.0.1 (2025-10-06)


### 🤖 CI

* add support for full OS and Node.js matrix in workflows ([46918a0](https://github.com/atldays/test-pkg/commit/46918a0563745f642faedb30f9fccb874a5e64df))

  - Introduced `full` input to `ci.yml` for enabling a complete OS and Node.js version matrix.
  - Split CI jobs into `build-and-test-reduced` and `build-and-test-full` for efficient execution.
  - Updated `release.yml` to trigger the full matrix when invoking the CI workflow.




### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v7.0.0 (2025-10-06)

### 💥 Breaking Changes

* Ensured breaking changes are surfaced even if no explicit notes are provided.


### ✨ Features

* improve breaking change handling in release notes ([f33dc86](https://github.com/atldays/test-pkg/commit/f33dc8657cb1076e484595f4fd4d548012706963))





### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v6.0.0 (2025-10-06)

### ✨ Features

* add square root function and tests ([ed6dcc8](https://github.com/atldays/test-pkg/commit/ed6dcc872132ddb4404584d102c7a55cb72881c4))





### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v5.0.0 (2025-10-06)

### ✨ Features

* add custom parser options for changelog generation ([8d6f53b](https://github.com/atldays/test-pkg/commit/8d6f53bc54ba032e5be71d797e2478bf0f91e5d7))

  - Enhanced `.release-it.cjs` to include `parserOpts` for better parsing of commit headers.
  - Improved handling of breaking changes using specified patterns and keywords.




### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

## 🚀 Release `@young-money/test-pkg` v4.0.0 (2025-10-06)

### 🧩 Other

* refactor!: remove redundant comment for fallback commit type logic ([ebd322c](https://github.com/atldays/test-pkg/commit/ebd322c9c14b0673c3b067059b770f3ec93eb29d))





### 🙌 Contributors

- [Anjey Tsibylskij](https://github.com/atldays) (@atldays) — 2 commits

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
