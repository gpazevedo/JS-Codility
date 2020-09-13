function solution(A) {
  let sumTo = 0;

  const upTo = A.map(function (num, index) {
    if (index === 0) {
      sumTo = num;
      return num;
    } else {
      sumTo = sumTo + num;
      return sumTo;
    }
  });

  let sumDown = A[A.length - 1];
  let minimal = Math.abs(sumDown - upTo[A.length - 2]);

  for (let index = A.length - 2; index >= 0; index--) {
    sumDown = sumDown + A[index];
    let absolut = Math.abs(sumDown - upTo[index - 1]);

    if (absolut === 0) {
      return 0;
    } else if (absolut < minimal) {
      minimal = absolut;
    }
  }
  return minimal;
}
module.exports = { solution };
