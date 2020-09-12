const { permMissingElemSet, permMissingElemXor } = require("./PermMissingElem");

describe("permMissingElem Set", () => {
  it("should work with an array with one element", () => {
    expect(permMissingElemSet([2])).toEqual(1);
  });

  it("should work when the last is missing", () => {
    expect(permMissingElemSet([1, 2])).toEqual(3);
  });

  it("should work when the first is missing", () => {
    expect(permMissingElemSet([3, 2])).toEqual(1);
  });

  it("should work when a middle integer is missing", () => {
    expect(permMissingElemSet([3, 4, 1])).toEqual(2);
  });

  it("should work when a middle integer is missing", () => {
    expect(permMissingElemSet([2, 3, 1, 5])).toEqual(4);
  });
});

describe("permMissingElem Xor", () => {
  it("should work with an array with one element", () => {
    expect(permMissingElemXor([2])).toEqual(1);
  });

  it("should work when the last is missing", () => {
    expect(permMissingElemXor([1, 2])).toEqual(3);
  });

  it("should work when the first is missing", () => {
    expect(permMissingElemXor([3, 2])).toEqual(1);
  });

  it("should work when a middle integer is missing", () => {
    expect(permMissingElemXor([3, 4, 1])).toEqual(2);
  });

  it("should work when a middle integer is missing", () => {
    expect(permMissingElemXor([2, 3, 1, 5])).toEqual(4);
  });
});
