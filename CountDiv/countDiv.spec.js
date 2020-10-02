const { countDiv } = require("./countDiv");

describe("countDiv", () => {
  it("K > B", () => {
    expect(countDiv(6, 11, 12)).toEqual(0);
  });

  it("K == B", () => {
    expect(countDiv(6, 11, 11)).toEqual(1);
  });

  it("K == B", () => {
    expect(countDiv(6, 11, 10)).toEqual(1);
  });

  it("Problem example", () => {
    expect(countDiv(6, 11, 2)).toEqual(3);
  });

  it("K == A", () => {
    expect(countDiv(6, 11, 6)).toEqual(1);
  });

  it("6 12 6", () => {
    expect(countDiv(6, 12, 6)).toEqual(2);
  });
});
