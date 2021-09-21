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

// create a function that loops through and array
// if the looping reaches an array inside the array to reach that and append that
const flatten = (array1) => {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    // console.log('elements in array:', array1[i]);
    // if element is not and array push onto result
    if (!Array.isArray(array1[i])) {
      // console.log(array1[i]);
      result.push(array1[i]);
    }
    // if item from above was not an element
    // check to see if it is an array (versus object)
    if (Array.isArray(array1[i])) {
      // console.log(array1[i])
      // if item is array loop through and array
      for (let inner of array1[i]) {
        // push inner array items on to result
        // console.log(inner);
        result.push(inner);
      }
    }
  }
  return result;
};




// Expected

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
let result = flatten([1, 2, [3, 4], 5, [6]]);
// console.log(forLoopArray([1, 2, [3, 4], 5, [6]]));
assertArraysEqual([1, 2, 3, 4, 5, 6], result);

module.exports = flatten;