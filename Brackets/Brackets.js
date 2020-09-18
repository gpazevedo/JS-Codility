function Brackets(text) {
  if (!text || text.length === 0) return 1;

  const opening = ["{", "[", "("];
  const closing = ["}", "]", ")"];

  const characters = Array.from(text);

  const stack = characters.reduce((acc, c) => {
    if (opening.indexOf(c) >= 0) {
      acc.push(c);
    } else {
      if (acc[acc.length - 1] != opening[closing.indexOf(c)]) return 0;
      else acc.pop();
    }
    return acc;
  }, []);
  return stack.length === 0 ? 1 : 0;
}
module.exports = { Brackets };
