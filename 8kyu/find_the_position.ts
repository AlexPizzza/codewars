export function position(letter: string): string {
  const ASCII_CODE_FOR_LOWERCASE_A = 97;
  return `Position of alphabet: ${
    letter.charCodeAt(0) - ASCII_CODE_FOR_LOWERCASE_A + 1
  }`;
}
