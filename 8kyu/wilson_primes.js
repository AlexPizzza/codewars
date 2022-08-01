function amIWilson(p) {
  if (!isPrime(p)) return false;
  return ((factorial(p - 1) + 1) / p ** 2) % 1 === 0;
}

const isPrime = (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
