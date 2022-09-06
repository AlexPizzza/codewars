function findNextPower(val, pow_) {
  if (val === 1) return 2 ** pow_;
  for (let i = 1; i <= val; i++) {
    if (Math.pow(i, pow_) > val) {
      return Math.pow(i, pow_);
    }
  }
}
