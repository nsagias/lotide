const middle = function(array1) {
  const result = [];
  // one OR two
  if (array1.length === 1 || array1.length === 2) {
    return result;
  }
  // odd case
  if (array1.length % 2 !== 0) {
    let oddMidpoint = Math.round(array1.length / 2 - 1);
    result.push(array1[oddMidpoint]);
    return result;
  }
  // even case
  if (array1.length % 2 === 0) {
    let evenMidPoint = array1.length / 2;
    result.push(array1[evenMidPoint - 1], array1[evenMidPoint]);
    return result;
  }
};

module.exports = middle;