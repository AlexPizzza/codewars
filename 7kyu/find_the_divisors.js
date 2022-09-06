function divisors(integer) {
  const output = [];
  for (let i = 2; i <= Math.floor(integer / 2); i++) {
    Number.isInteger(integer / i) ? output.push(i) : null;
  }
  return output.length ? output : `${integer} is prime`;
}
