function cyclicRotation(vector, n) {
  const size = vector.length;
  const shifts = n % size;

  const shifted = vector.reduce((acc, _, index, old) => {
    acc[(index + shifts) % size] = old[index];
    return acc;
  }, []);

  return shifted;
}
module.exports = { cyclicRotation };
