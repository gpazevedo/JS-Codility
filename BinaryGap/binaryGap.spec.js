const { binaryGap } = require("./binaryGap");

describe("binaryGap", () => {
  it("1 should return 0", () => {
    expect(binaryGap(1)).toEqual(0);
  });

  it("2 should return 0", () => {
    expect(binaryGap(2)).toEqual(0);
  });

  it("power of 2 should return 0", () => {
    expect(binaryGap(32)).toEqual(0);
  });

  it("power of 2 -1 should return 0", () => {
    expect(binaryGap(127)).toEqual(0);
  });

  it("101 should return 1", () => {
    expect(binaryGap(Number.parseInt("101", 2))).toEqual(1);
  });

  it("1041 should return 5", () => {
    expect(binaryGap(1041)).toEqual(5);
  });

  it("110001000011000001 should return 5", () => {
    expect(binaryGap(Number.parseInt("110001000011000001", 2))).toEqual(5);
  });

  it("100000001 should return 7", () => {
    expect(binaryGap(Number.parseInt("100000001", 2))).toEqual(7);
  });
});
