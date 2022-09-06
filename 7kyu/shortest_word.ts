export function findShort(s: string): number {
  return s.split(" ").reduce((prev: number, curr: string, idx: number) => {
    if (idx === 0) return curr.length;
    if (curr.length < prev) return curr.length;
    return prev;
  }, 0);
}
