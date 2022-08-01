export function index(array: number[], n: number): number {
  return n > array.length - 1 ? -1 : array[n] ** n;
}
