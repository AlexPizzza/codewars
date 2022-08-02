export function countSheeps(
  arrayOfSheep: (boolean | undefined | null)[]
): number {
  return arrayOfSheep.reduce((prev, curr) => (curr ? prev + 1 : prev), 0);
}
