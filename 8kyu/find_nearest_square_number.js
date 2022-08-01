function nearestSq(n) {
  const sqrtOfNumber = Math.sqrt(n);
  const prev = Math.floor(sqrtOfNumber) * Math.floor(sqrtOfNumber);
  const after =
    sqrtOfNumber % 1 != 0
      ? (Math.floor(sqrtOfNumber) + 1) * (Math.floor(sqrtOfNumber) + 1)
      : Math.ceil(sqrtOfNumber) * Math.ceil(sqrtOfNumber);
  return n - prev < after - n ? prev : after;
}
