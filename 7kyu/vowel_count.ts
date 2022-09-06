export class Kata {
  static getCount(str: string): number {
    return str.split("").reduce((prev, curr) => {
      return prev + (/[aAeEiIoOuU]/.test(curr) ? 1 : 0);
    }, 0);
  }
}
