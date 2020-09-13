function PermCheck(perm) {
  const numbers = new Set(perm.filter((p) => p > 0));
  if (numbers.size < perm.length) return 0;

  for (let index = 1; index <= numbers.size; index++) {
    if (!numbers.has(index)) return 0;
  }
  return 1;
}
module.exports = { PermCheck };
