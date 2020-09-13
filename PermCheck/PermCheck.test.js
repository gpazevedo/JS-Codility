const { PermCheck } = require("./PermCheck");

describe("PermCheck", () => {
  it("Should work for the examples", () => {
    expect(PermCheck([4, 1, 3, 2])).toEqual(1);
  });

  it("Should work for the examples", () => {
    expect(PermCheck([4, 1, 3])).toEqual(0);
  });

  it("Should work for a duple", () => {
    expect(PermCheck([1, 1])).toEqual(0);
  });
});
