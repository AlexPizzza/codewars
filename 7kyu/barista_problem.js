function barista(coffees) {
  if (!coffees.length) return 0;

  const TIME_TO_CLEAN = 2;
  coffees.sort((a, b) => a - b);
  let prev = coffees[0];
  const array = coffees.map((time, index) => {
    if (index === 0) return time;
    prev = prev + TIME_TO_CLEAN + time;
    return prev;
  });
  return array.reduce((prev, curr) => prev + curr, 0);
}
