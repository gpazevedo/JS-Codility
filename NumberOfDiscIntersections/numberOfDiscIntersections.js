function numberOfDiscIntersections(A) {
  const events = [];

  A.forEach((v, i) => {
    events.push([i - v, +1]);
    events.push([i + v, 0]);
  });
  events.sort((a, b) => a[0] * 10 - b[0] * 10 + b[1] - a[1]);

  let intersections = 0;
  let discs = 0;

  events.forEach((v) => {
    if (v[1]) {
      intersections += discs;
      discs++;
      if (intersections > 10000000) {
        return -1;
      }
    } else {
      discs--;
    }
  });
  return intersections;
}

// console.log(Solution([1, 5, 2, 1, 4, 0]));
// console.log(Solution([1, 1, 1]));

module.exports = { numberOfDiscIntersections };
