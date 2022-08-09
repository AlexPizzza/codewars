var fibsFizzBuzz = function (n) {
  if (n === 1) return [1];
  let first = 1,
    second = 1;
  const result = [first, second];
  for (let i = 2; i < n; i++) {
    const value = first + second;
    first = second;
    second = value;
    result.push(fizzBuzz(value));
  }
  return result;
};

const fizzBuzz = (n) => {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 5 === 0) return "Buzz";
  if (n % 3 === 0) return "Fizz";
  return n;
};
