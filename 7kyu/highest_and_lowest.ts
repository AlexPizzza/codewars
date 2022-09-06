export class Kata {
  static highAndLow(numbers: string): string {
    const output: [number, number] = [
      Number.MAX_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
    ];
    numbers.split(" ").forEach((num) => {
      if (+num < output[0]) output[0] = +num;
      if (+num > output[1]) output[1] = +num;
    });

    return `${output[1]} ${output[0]}`;
  }
}
