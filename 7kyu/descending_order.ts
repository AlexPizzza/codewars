export function descendingOrder(n: number): number {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => {
        if (+a > +b) return -1;
        return 0;
      })
      .join("")
  );
}
