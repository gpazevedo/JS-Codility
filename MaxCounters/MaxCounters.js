function MaxCounters(N, commands) {
  const { maxInicial, positions } = commands.reduce(
    ({ maxTotal, maxInicial, positions }, command) => {
      if (command === N + 1) {
        maxInicial = maxTotal;
      } else {
        positions[command - 1] =
          (positions[command - 1] < maxInicial
            ? maxInicial
            : positions[command - 1]) + 1;

        maxTotal =
          maxTotal >= positions[command - 1]
            ? maxTotal
            : positions[command - 1];
      }
      return { maxTotal, maxInicial, positions };
    },
    { maxTotal: 0, maxInicial: 0, positions: new Array(N).fill(0) }
  );
  const pos = positions.map((p) => (p = p >= maxInicial ? p : maxInicial));
  return pos;
}
module.exports = { MaxCounters };
