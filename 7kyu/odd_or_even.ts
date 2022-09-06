export function oddOrEven(array: number[]) {
  return array.reduce((prev: number, curr: number) => prev + curr, 0) % 2
    ? "odd"
    : "even";
}
