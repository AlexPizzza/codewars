export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  return (
    yourPoints >
    classPoints.reduce((prev, current) => prev + current, 0) /
      classPoints.length
  );
}
