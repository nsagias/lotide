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

// The function will return a
// "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate
// returns a truthy value.

// To keep things simple, the callback should only be provided one value:
// The item in the array.

const takeUntil = function(array, callback) {
  // declare return variable to stop error
  let result = [];
  let getIndex;
  // get position of index
  array.forEach(function(array, index) {
    if (callback(array)) {
      getIndex = index;
    }
  });
  // add position of index to for...loop as condition
  for (let i = 0; i < getIndex; i++) {
    // append all data to result
    result.push(array[i]);
  }
  return result;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);

module.exports = takeUntil;