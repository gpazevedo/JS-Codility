const { oddOccurrencesInArray } = require("./OddOccurrencesInArray");

describe("oddOccurrencesInArray", () => {
  it("should work with an array with one element", () => {
    expect(oddOccurrencesInArray([5], 0)).toEqual(5);
  });

  it("should work with an array with 7 elements", () => {
    expect(oddOccurrencesInArray([5, 1, 3, 3, 5, 3, 3], 0)).toEqual(1);
  });
});
