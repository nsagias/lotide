const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


console.log(eqArrays([1, 2, 3], [1, 2, 3]), 'Should be true'); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]), 'Should be false'); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]),'Should be true'); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]), 'Should be false'); // => false


// Use assertEqual to write test cases for various scenarios.

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL