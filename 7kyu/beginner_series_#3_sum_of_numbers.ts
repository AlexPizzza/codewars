export function getSum(a: number, b: number): number {
  if (a === b) return a;
  if (b < a) {
    a = a + b;
    b = a - b;
    a = a - b;
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}
