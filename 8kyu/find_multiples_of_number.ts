export function findMultiples(integer: number, limit: number): number[] {
  let i = 2;
  let current = integer;
  const arr: number[] = [];
  while (current <= limit) {
    arr.push(current);
    current = integer * i;
    i++;
  }
  return arr;
}
