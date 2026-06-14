export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const n1 = collection_1.length;
  const n2 = collection_2.length;
  const n3 = collection_3.length;
  const total = n1 + n2 + n3;
  const out: number[] = new Array(total);

  let i1 = 0;
  let i2 = n2 - 1;
  let i3 = 0;
  let w = 0;

  while (w < total) {
    const v1 = i1 < n1 ? collection_1[i1]! : Number.POSITIVE_INFINITY;
    const v2 = i2 >= 0 ? collection_2[i2]! : Number.POSITIVE_INFINITY;
    const v3 = i3 < n3 ? collection_3[i3]! : Number.POSITIVE_INFINITY;

    if (v1 <= v2 && v1 <= v3) {
      out[w++] = v1;
      i1++;
    } else if (v2 <= v1 && v2 <= v3) {
      out[w++] = v2;
      i2--;
    } else {
      out[w++] = v3;
      i3++;
    }
  }

  return out;
}
