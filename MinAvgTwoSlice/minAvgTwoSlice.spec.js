const { minAvgTwoSlice } = require("./minAvgTwoSlice");

describe("MinAvgTwoSlice", () => {
  it("Suggested example", () => {
    expect(minAvgTwoSlice([2, 2, 5, 1, 5, 8])).toEqual(0);
  });

  it("[1,2]", () => {
    expect(minAvgTwoSlice([1, 2])).toEqual(0);
  });

  it("[1,2, 0]", () => {
    expect(minAvgTwoSlice([1, 2, 0])).toEqual(1);
  });

  it("[5, 1,2]", () => {
    expect(minAvgTwoSlice([5, 1, 2])).toEqual(1);
  });

  it("[5, 1,2, 0]", () => {
    expect(minAvgTwoSlice([5, 1, 2, 0])).toEqual(2);
  });
});
