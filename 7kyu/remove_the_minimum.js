function removeSmallest(numbers) {
  const index = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
}
