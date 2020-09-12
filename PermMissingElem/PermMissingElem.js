function permMissingElemSet(integers) {
  const all = new Set(integers);

  for (let index = 1; index <= integers.length + 1; index++) {
    if (!all.has(index)) return index;
  }
}

function permMissingElemXor(integers) {
  return integers.reduce(
    (acc, elem, index) => (acc = acc ^ elem ^ (index + 1)),
    integers.length + 1
  );
}

module.exports = { permMissingElemSet, permMissingElemXor };
