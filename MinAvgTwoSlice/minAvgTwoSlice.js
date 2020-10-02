function minAvgTwoSlice(A) {
  if (A.length === 2) {
    return 0;
  }
  let minDupla = (A[0] + A[1]) / 2;
  let posDupla = 0;
  let minTripla = (A[0] + A[1] + A[2]) / 3;
  let posTripla = 0;

  for (let i = 2; i < A.length; i++) {
    if ((A[i - 1] + A[i]) / 2 < minDupla) {
      minDupla = (A[i - 1] + A[i]) / 2;
      posDupla = i - 1;
    }
    if ((A[i - 2] + A[i - 1] + A[i]) / 3 < minTripla) {
      minTripla = (A[i - 2] + A[i - 1] + A[i]) / 3;
      posTripla = i - 2;
    }
  }
  return minTripla < minDupla ? posTripla : posDupla;
}
module.exports = { minAvgTwoSlice };
