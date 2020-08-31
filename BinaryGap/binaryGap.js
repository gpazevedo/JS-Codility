function binaryGap(number) {
  let longest = 0;
  let count = 0;

  let sequence = number & 1;

  while ((number >>= 1)) {
    const isOne = number & 1;

    if (sequence) {
      if (isOne) {
        if (count > longest) {
          longest = count;
        }
        count = 0;
      } else {
        count++;
      }
    }
    sequence = isOne || sequence ? isOne || sequence : false;
  }

  return longest;
}

module.exports = { binaryGap };
