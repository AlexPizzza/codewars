export function isIsogram(str: string): boolean {
  str = str.toLowerCase();
  return str.split("").filter((el, idx) => {
    const slicedStr = str.slice(0, idx) + str.slice(idx + 1);
    return slicedStr.split("").includes(el);
  }).length === 0
    ? true
    : false;
}
