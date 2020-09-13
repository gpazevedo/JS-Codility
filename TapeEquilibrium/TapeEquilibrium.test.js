const { solution } = require("./TapeEquilibrium");

describe("tapeEquilibrium", () => {
  it("[3,1,2,4,3]", () => {
    expect(solution([3, 1, 2, 4, 3])).toEqual(1);
  });

  it("should work with 2 elements", () => {
    expect(solution([10, -10])).toEqual(20);
  });

  it("should work with 3 elements", () => {
    expect(solution([3, -1, 2])).toEqual(0);
  });
});
