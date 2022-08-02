function wordsToMarks(string) {
  const ASCII_FOR_LOWERCASE_A = 97;

  return string
    .split("")
    .reduce(
      (prev, curr) => prev + (curr.charCodeAt(0) - ASCII_FOR_LOWERCASE_A + 1),
      0
    );
}
