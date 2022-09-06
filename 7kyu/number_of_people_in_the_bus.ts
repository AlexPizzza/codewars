export function number(busStops: [number, number][]): number {
  return busStops.reduce(
    (prev: number, curr: [number, number]) => prev + curr[0] - curr[1],
    0
  );
}
