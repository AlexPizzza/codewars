function stray(numbers) {
  const map = {};
  for (let i = 0; i < numbers.length; i++) {
    if (!map.hasOwnProperty(numbers[i])) {
      map[numbers[i]] = 1;
    } else {
      map[numbers[i]]++;
    }
  }
  let strayNumber = 0;
  Object.keys(map).forEach((el) => {
    if (map[el] === 1) strayNumber = +el;
  });
  return strayNumber;
}
