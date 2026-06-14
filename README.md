# Merge

`merge(collection_1, collection_2, collection_3): number[]`

- `collection_1`, `collection_3`: ascending  
- `collection_2`: descending  
- Result: all values ascending. No `Array.prototype.sort` (tests guard one call site).

```bash
npm install
npm test
npm run typecheck
```
