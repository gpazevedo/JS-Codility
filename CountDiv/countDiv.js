function countDiv(A, B, K) {
  const dif = Math.floor(B / K) - Math.floor(A / K);

  return K <= A ? dif + 1 : dif;
}
module.exports = { countDiv };
