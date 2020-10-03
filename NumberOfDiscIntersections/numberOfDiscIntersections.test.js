const { numberOfDiscIntersections } = require("./numberOfDiscIntersections");
describe("numberOfDiscIntersections", () => {
  it("numberOfDiscIntersections", () => {
    expect(numberOfDiscIntersections([1, 1, 1])).toEqual(3);
  });

  it("numberOfDiscIntersections", () => {
    expect(numberOfDiscIntersections([1, 5, 2, 1, 4, 0])).toEqual(11);
  });
});
