export class Kata {
  static squareDigits(num: number): number {
    return parseInt(
      num
        .toString()
        .split("")
        .reduce((prev, curr) => {
          return `${prev}${parseInt(curr) ** 2}`;
        }, "")
    );
  }
}
