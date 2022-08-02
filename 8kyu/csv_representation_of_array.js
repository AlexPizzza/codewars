function toCsvText(array) {
  return array.reduce(
    (prev, curr, currIndex) =>
      currIndex !== array.length - 1
        ? `${prev.concat(curr.join(","))}\n`
        : `${prev.concat(curr.join(","))}`,
    ""
  );
}
