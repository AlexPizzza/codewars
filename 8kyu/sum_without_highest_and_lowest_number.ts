export function sumArray(array: number[] | null): number {
  if (!array || array.length <= 1) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((p, n) => p + n, 0);
}
