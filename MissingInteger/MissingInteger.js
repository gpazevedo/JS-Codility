function MissingInteger(numbers) {
  const positive = new Set(numbers.filter((n) => n > 0));

  for (let index = 1; index <= positive.size; index++) {
    if (!positive.has(index)) return index;
  }
  return positive.size + 1;
}
module.exports = { MissingInteger };
