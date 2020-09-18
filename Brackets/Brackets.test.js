const { Brackets } = require("./Brackets");
describe("Brackets", () => {
  it("Should work for empty string", () => {
    expect(Brackets("")).toEqual(1);
  });

  it("Should work for []", () => {
    expect(Brackets("[]")).toEqual(1);
  });

  it("Should work for {}", () => {
    expect(Brackets("{}")).toEqual(1);
  });

  it("Should work for ()", () => {
    expect(Brackets("()")).toEqual(1);
  });

  it("Should work for (()", () => {
    expect(Brackets("(()")).toEqual(0);
  });

  it("Should work for [{()()}]", () => {
    expect(Brackets("[{()()}]")).toEqual(1);
  });

  it("Should work for [{()[]()}]", () => {
    expect(Brackets("[{()[]()}]")).toEqual(1);
  });

  it("Should work for [{()[]{{}}()}]", () => {
    expect(Brackets("[{()[]{{}}()}]")).toEqual(1);
  });

  it("Should work for [{()[]{{}}((()))()}]", () => {
    expect(Brackets("[{()[]{{}}((()))()}]")).toEqual(1);
  });

  it("Should work for [{()[]{{}}((((())))()}]", () => {
    expect(Brackets("[{()[]{{}}(((()))()}]")).toEqual(0);
  });
});
