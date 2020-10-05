function Flags(A) {
  const tryFlags = (jump) => {
    let flags = 1;
    let next = peaks[0] + jump;
    let f = 1;
    while (f < peaks.length) {
      if (peaks[f] >= next) {
        flags++;
        next = peaks[f] + jump;
      }
      f++;
    }
    return flags;
  };

  const peaks = [];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  if (peaks.length === 0) return 0;

  let flagsToPut = Math.min(
    peaks.length,
    Math.ceil(Math.sqrt(peaks[peaks.length - 1] - peaks[0]) + 1)
  );

  if (flagsToPut < 2) return flagsToPut;

  let flagsPut = 0;
  do {
    flagsPut = tryFlags(flagsToPut);
    if (flagsPut >= flagsToPut) return flagsToPut;
    flagsToPut--;
  } while (flagsPut < flagsToPut);

  return flagsToPut;
}
module.exports = { Flags };
