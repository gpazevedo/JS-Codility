function maxDoubleSliceSum(A) {
  if (A.length <= 3) {
    return 0;
  }

  const { leftSequences } = A.reduce(
    ({ leftSequences }, value, i) => {
      if (i < 2 || i === A.length - 1) {
        leftSequences[i] = 0;
      } else {
        leftSequences[i] = Math.max(
          leftSequences[i - 1] + A[i - 1],
          A[i - 1],
          0
        );
      }
      return { leftSequences };
    },
    { leftSequences: [] }
  );

  const { rightSequences } = A.reduceRight(
    ({ rightSequences }, value, i) => {
      if (i > A.length - 3 || i === 0) {
        rightSequences[i] = 0;
      } else {
        rightSequences[i] = Math.max(
          rightSequences[i + 1] + A[i + 1],
          A[i + 1],
          0
        );
      }
      return { rightSequences };
    },
    { rightSequences: [] }
  );

  let maxTotal = 0;
  let maxPos = 0;

  for (let i = 1; i < A.length - 1; i++) {
    maxPos = rightSequences[i] + leftSequences[i] > maxTotal ? i : maxPos;
    maxTotal =
      rightSequences[i] + leftSequences[i] > maxTotal
        ? rightSequences[i] + leftSequences[i]
        : maxTotal;
  }
  return maxTotal;
}

module.exports = { maxDoubleSliceSum };
