function powersOfTwo(n) {
  const arr = [];
  for (let i = 0; i < n + 1; i++) {
    arr.push(2 ** i);
  }
  return arr;
}
