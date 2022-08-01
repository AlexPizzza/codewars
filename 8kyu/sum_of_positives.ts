export function positiveSum(arr: number[]): number {
  return arr.reduce(
    (prev, current) => (current > 0 ? prev + current : prev),
    0
  );
}
