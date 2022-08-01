function isOpposite(s1, s2) {
  if (!s1.length || !s2.length || s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i++) {
    if (
      s1.charAt(i).toLowerCase() !== s2.charAt(i).toLowerCase() ||
      s1.charAt(i) === s2.charAt(i)
    ) {
      return false;
    }
  }

  return true;
}
