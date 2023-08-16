export function merge(collection_1: number[], collection_2: number[]): number[] {
  let merged: number[];
  merged = collection_1.concat(collection_2);
  let tmp;
  let swap = false;
  while (!swap) {
    swap = true;
    for (let i = 0; i < merged.length; i++) {
      if (merged[i] > merged[i + 1]) {
        swap = false;
        tmp = merged[i + 1];
        merged[i + 1] = merged[i];
        merged[i] = tmp;
      }
    }
  }
  return merged;
}
