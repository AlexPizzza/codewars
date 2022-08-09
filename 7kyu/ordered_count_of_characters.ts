export function orderedCount(text: string): [string, number][] {
  const result: [string, number][] = [];
  text.split("").forEach((char) => {
    const index = result.findIndex((arr) => arr[0] === char);
    if (index !== -1) {
      result[index][1]++;
    } else {
      result.push([char, 1]);
    }
  });
  return result;
}
