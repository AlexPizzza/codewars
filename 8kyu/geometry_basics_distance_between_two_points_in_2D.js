function distanceBetweenPoints(a, b) {
  // distance = √((a.x - b.x)² + (a.y - b.y)²)

  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}
