import { describe, expect, it } from "vitest";
import { merge } from "../src/merge.js";

function assertNoSortSpy() {
  const original = Array.prototype.sort;
  Array.prototype.sort = function sortForbidden() {
    throw new Error("Array.prototype.sort must not be used in this project.");
  };
  return () => {
    Array.prototype.sort = original;
  };
}

describe("merge", () => {
  it("merges three streams into ascending order", () => {
    const restore = assertNoSortSpy();
    try {
      expect(merge([1, 4, 7], [9, 5, 2], [3, 6, 8])).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
    } finally {
      restore();
    }
  });

  it("handles empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [0])).toEqual([0, 1, 2]);
    expect(merge([], [5, 3, 1], [])).toEqual([1, 3, 5]);
  });

  it("handles duplicates and ties", () => {
    // 8 values total: two 2s from each ascending array, two 2s from descending, one 2 in c3 → five 2s
    expect(merge([1, 2, 2], [4, 2, 2], [2, 3])).toEqual([1, 2, 2, 2, 2, 2, 3, 4]);
  });

  it("handles negatives and zeros", () => {
    expect(merge([-3, 0, 2], [1, 0, -5], [-2, 4])).toEqual([
      -5, -3, -2, 0, 0, 1, 2, 4,
    ]);
  });

  it("single-element collections", () => {
    expect(merge([10], [5], [7])).toEqual([5, 7, 10]);
  });
});
