export function squareSum(numbers: number[]): number {
  return numbers.reduce((prev, current) => prev + current ** 2, 0);
}
