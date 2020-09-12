const { permMissingElemSet, permMissingElemXor } = require("./PermMissingElem");

describe("permMissingElem Set", () => {
  it("should work with an array with one element", () => {
    expect(permMissingElemSet([1])).toEqual(0);
  });

  it("should work when the last is missing", () => {
    expect(permMissingElemSet([0, 1])).toEqual(2);
  });

  it("should work when the first is missing", () => {
    expect(permMissingElemSet([2, 1])).toEqual(0);
  });

  it("should work when a middle integer is missing", () => {
    expect(permMissingElemSet([2, 3, 0])).toEqual(1);
  });
});

describe("permMissingElem Xor", () => {
  it("should work with an array with one element", () => {
    expect(permMissingElemXor([1])).toEqual(0);
  });

  it("should work when the last is missing", () => {
    expect(permMissingElemXor([2, 1])).toEqual(0);
  });

  it("should work when a middle integer is missing", () => {
    expect(permMissingElemXor([2, 3, 0])).toEqual(1);
  });
});
