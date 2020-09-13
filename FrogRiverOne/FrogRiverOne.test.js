const { FrogRiverOne } = require("./FrogRiverOne");

describe("FrogRiverOne", () => {
  it("should work with the example", () => {
    expect(FrogRiverOne([1, 3, 1, 4, 2, 3, 5, 4], 5)).toEqual(6);
  });

  it("should noticed when the target can be reached", () => {
    expect(FrogRiverOne([1, 3, 1, 4, 5, 3, 5, 4], 5)).toEqual(-1);
  });
});
