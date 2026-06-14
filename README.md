# merge-sorted-collections

TypeScript project implementing:

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

**Input assumptions**

- `collection_1` and `collection_3` are sorted **ascending** (smallest → largest).
- `collection_2` is sorted **descending** (largest → smallest).

**Output**

- One array containing every element from the three inputs, sorted **ascending**.

**Implementation**

- Linear-time **three-pointer merge** (no `Array.prototype.sort` or other sort helpers).

## Setup

Requires [Node.js](https://nodejs.org/) 20+ (LTS recommended).

```powershell
cd C:\Users\poon\Projects\merge-sorted-collections
git init
npm install
```

## Run unit tests

```powershell
npm test
```

Watch mode:

```powershell
npm run test:watch
```

## Run the small demo

```powershell
npm start
```

This prints the merged result for a fixed example in `src/demo.ts`.

## Typecheck

```powershell
npm run build
```

(`tsc` is configured with `noEmit: true` for fast typechecking only.)
