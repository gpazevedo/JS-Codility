function oddOccurrencesInArray(array) {
  return array.reduce((acc, cur) => (acc ^= cur));
}
module.exports = { oddOccurrencesInArray };
