const { Flags } = require("./Flags");

describe("Flags", () => {
  it("Problem example", () => {
    expect(Flags([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toEqual(3);
  });

  it("No mountains", () => {
    expect(Flags([])).toEqual(0);
  });

  it("No peaks stable", () => {
    expect(Flags([3, 2, 2, 2])).toEqual(0);
  });

  it("No peaks growing", () => {
    expect(Flags([1, 2, 3, 4])).toEqual(0);
  });

  it("No peaks decreasing", () => {
    expect(Flags([4, 3, 2, 2])).toEqual(0);
  });

  it("Simplest test 1 peak", () => {
    expect(Flags([1, 3, 2])).toEqual(1);
  });

  it("Simplest test 2 peak", () => {
    expect(Flags([1, 3, 2, 3, 1])).toEqual(2);
  });

  it("Simplest test 2 peak", () => {
    expect(Flags([1, 3, 2, 3, 1, 3])).toEqual(2);
  });

  it("Simplest test 3 peak", () => {
    expect(Flags([1, 3, 2, 3, 1, 3, 1])).toEqual(2);
  });
});
