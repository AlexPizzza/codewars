function sum(numbers) {
  if (!numbers.length) return 0;

  return numbers.reduce((prev, curr) => prev + curr, 0);
}
