export function countPositivesSumNegatives(input: any): [] | [number, number] {
  if (!input || !input.length) return [];

  const arr: [number, number] = [0, 0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      arr[0]++;
    }
    if (input[i] < 0) {
      arr[1] += input[i];
    }
  }
  return arr;
}
