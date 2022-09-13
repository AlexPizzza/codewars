function add(a, b) {
  const lengthA = a.length;
  const lengthB = b.length;
  const maxLength = Math.max(lengthA, lengthB);

  let carry = 0;
  let sum = "";

  for (let i = 1; i <= maxLength; i++) {
    let newA = +a.charAt(lengthA - i);
    let newB = +b.charAt(lengthB - i);

    let t = carry + newA + newB;
    carry = (t / 10) | 0;
    t %= 10;

    sum = i === maxLength && carry ? carry * 10 + t + sum : t + sum;
  }

  return sum;
}
