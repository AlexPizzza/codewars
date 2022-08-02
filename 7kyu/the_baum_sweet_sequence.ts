export function* baumSweet(): Generator<number, any, undefined> {
  yield 1;
  let i: number = 0;
  while (true) {
    i += 1;
    yield +i
      .toString(2)
      .split(/1/g)
      .every((el) => el.length % 2 === 0);
  }
}
