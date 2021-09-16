const eqArrays = function(array1, array2) {
  if (array1 === undefined || array2 === undefined) {
    return undefined;
  }
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



const letterPositions = function(sentence) {
  const results = {};
  return results;
}

// // expected 
// results = { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
let results1 = letterPositions("lighthouse in the house");

assertArraysEqual(results1['l'], [0]); // => true
assertArraysEqual(results1['h'], [3, 5, 15, 18]); // => true
assertArraysEqual(results1['n'], [12]); // => true

