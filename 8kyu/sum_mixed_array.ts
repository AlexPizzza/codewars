export function sumMix(x: any[]): number {
  return x.reduce((prev, current) => {
    return prev + +current;
  }, 0);
}
