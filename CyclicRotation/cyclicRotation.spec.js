const { cyclicRotation } = require("./cyclicRotation");

describe("cyclicRotation", () => {
  it("should repeat 0 shifted vector", () => {
    expect(cyclicRotation([3, 8, 9, 7, 6], 0)).toEqual([3, 8, 9, 7, 6]);
  });

  it("should repeat vector for n multiple of the vector's size", () => {
    expect(cyclicRotation([3, 8, 9, 7, 6], 10)).toEqual([3, 8, 9, 7, 6]);
  });

  test("[3, 8, 9, 7, 6], 3", () => {
    expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
  });
});
