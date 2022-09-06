export function accum(s: string): string {
  return s.split("").reduce((prev, curr, idx) => {
    let next = curr.toUpperCase();
    for (let i = 0; i < idx; i++) {
      next += curr.toLowerCase();
    }
    return idx === 0 ? `${next}` : `${prev}-${next}`;
  }, "");
}
