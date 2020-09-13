const { MissingInteger } = require("./MissingInteger");

describe("MissingInteger", () => {
  it("Should  work for problem examples 1", () => {
    expect(MissingInteger([1, 2, 3])).toEqual(4);
  });

  it("Should  work for problem examples 2", () => {
    expect(MissingInteger([-1, -3])).toEqual(1);
  });

  it("Should  work for problem examples 3", () => {
    expect(MissingInteger([1, 3, 6, 4, 1, 2])).toEqual(5);
  });
});
