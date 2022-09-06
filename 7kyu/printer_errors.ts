export function printerError(s: string): string {
  return `${s.split("").filter((el) => /[n-z]/g.test(el)).length}/${s.length}`;
}
