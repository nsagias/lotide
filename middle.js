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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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


// test cases
console.log('one or two elements no middle, should return empty array');
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

console.log('ODD number of elements should return the exact middle odd element');
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log('EVEN should return the two middle values');
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
