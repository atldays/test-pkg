# test-pkg

A tiny npm package that provides a simple `add(a, b)` function. Now written in TypeScript and shipped with type definitions.

## Install

```bash
npm install test-pkg
# or
yarn add test-pkg
# or
pnpm add test-pkg
```

## Usage

TypeScript / ESM:

```ts
import { add } from "test-pkg";

console.log(add(2, 3)); // 5
```

CommonJS:

```js
const { add } = require("test-pkg");

console.log(add(2, 3)); // 5
```

## API

- `add(a: number, b: number): number` — Returns the sum of two numbers. Throws a TypeError if any argument is not a number.

## Development

- Source: TypeScript in `src/`
- Build: `npm run build` (tsup) → outputs ESM (`dist/index.mjs`) + CommonJS (`dist/index.cjs`) and types (`dist/index.d.ts`).
- Tests: Jest

## Scripts

- `npm test` — Run tests with Jest.
- `npm run test:watch` — Watch mode for tests.
- `npm run lint` — Lint using Biome.
- `npm run format` — Format files in-place using Biome.
- `npm run format:check` — Check formatting without writing.
- `npm run build` — Build with tsup (ESM + CJS + d.ts) to `dist/`.
- `npm run prepublishOnly` — Validate (lint, format check, tests) and then build before publishing.

## License

MIT
