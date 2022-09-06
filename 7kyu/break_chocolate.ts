export function breakChocolate(n: number, m: number): number {
  return n < 1 || m < 1 ? 0 : n * m - 1;
}
