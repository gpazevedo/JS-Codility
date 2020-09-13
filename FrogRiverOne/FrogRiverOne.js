function FrogRiverOne(falls, target) {
  const covered = new Set();
  let second = 0;

  for (; second < falls.length && covered.size < target; second++) {
    covered.add(falls[second]);
  }
  return covered.size === target ? second - 1 : -1;
}
module.exports = { FrogRiverOne };
