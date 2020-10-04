const { maxDoubleSliceSum } = require("./maxDoubleSliceSum");

describe("maxDoubleSliceSum", () => {
  it("maxDoubleSliceSum", () => {
    expect(maxDoubleSliceSum([3, 2, 6, -1, 4, 5, -1, 2])).toEqual(
      [2, 6, 4, 5].reduce((acc, e) => (acc += e))
    );
  });

  it("maxDoubleSliceSum", () => {
    expect(maxDoubleSliceSum([3, 2, 6, -1, 4, -20, 5, -1, 2])).toEqual(
      [2, 6, -1, 4, 5].reduce((acc, e) => (acc += e))
    );
  });

  it("maxDoubleSliceSum", () => {
    expect(maxDoubleSliceSum([5, 5, 5])).toEqual(0);
  });

  it("maxDoubleSliceSum", () => {
    expect(maxDoubleSliceSum([5, 17, 0, 3])).toEqual(17);
  });

  it("maxDoubleSliceSum", () => {
    expect(maxDoubleSliceSum([5, 0, 1, 0, 5])).toEqual(1);
  });
});
