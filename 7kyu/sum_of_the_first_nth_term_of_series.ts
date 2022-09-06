export function SeriesSum(n: number): string {
  if (n === 0) return "0.00";

  let sum = 1;
  const NUM_TO_ADD = 1;
  const NUM_TO_MULTIPLY = 3;
  for (let i = 1; i < n; i++) {
    sum += 1 / (NUM_TO_MULTIPLY * i + NUM_TO_ADD);
  }
  return sum.toFixed(2).toString();
}
