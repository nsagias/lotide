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
  // get each letter from sentence
  for (let i = 0; i < sentence.length; i++) {
    // if space character skip
    if (sentence[i] !== " ") {
      // need to update key and with addtion position in arraay
      if (results[sentence[i]]) {
        // push on to array
        results[sentence[i]].push(i);
      }
      // create key and add first value to array
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};


let results1 = letterPositions("lighthouse in the house");

assertArraysEqual(results1['l'], [0]); // => PASS
assertArraysEqual(results1['h'], [3, 5, 15, 18]); // => PASS
assertArraysEqual(results1['n'], [12]); // => PASS
assertArraysEqual(results1['g'], [12]); // => FAIL

module.exports = letterPositions;
