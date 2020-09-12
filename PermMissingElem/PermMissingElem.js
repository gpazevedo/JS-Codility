function permMissingElemSet(integers) {
  const all = new Set(integers);

  for (let index = 0; index <= integers.length; index++) {
    if (!all.has(index)) return index;
  }
}

function permMissingElemXor(integers) {
  return integers.reduce(
    (acc, elem, index) => (acc = acc ^ elem ^ index),
    integers.length
  );
}

module.exports = { permMissingElemSet, permMissingElemXor };
