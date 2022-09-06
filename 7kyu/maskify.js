function maskify(cc) {
  return cc
    .split("")
    .map((el, index) => {
      if (index >= cc.length - 4) {
        return el;
      }
      return "#";
    })
    .join("");
}
