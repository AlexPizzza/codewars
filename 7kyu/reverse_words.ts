export function reverseWords(str: string): string {
  return str
    .split(" ")
    .map((word: string) => word.split("").reverse().join(""))
    .join(" ");
}
