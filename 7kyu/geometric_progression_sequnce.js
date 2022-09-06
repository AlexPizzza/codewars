function geometricSequenceElements(a, r, n) {
  let prev = a;
  let result = "";
  let i = 0;
  while (i < n) {
    result += `${prev}, `;
    prev *= r;
    i++;
  }
  return result.slice(0, -2);
}
