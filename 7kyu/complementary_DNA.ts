export class Kata {
  static dnaStrand(dna: string) {
    const map: { [key: string]: string } = {
      A: "T",
      T: "A",
      C: "G",
      G: "C",
    };

    return dna
      .split("")
      .map((el) => map[el])
      .join("");
  }
}
