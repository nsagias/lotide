const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  if (array1[0] !== array2[0]) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;