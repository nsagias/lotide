const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(oneArray) {
  let myTail = [];
  if (oneArray.length === 1 || oneArray[0] === []) {
    return [];
  } else {
    for (let i = 1; i < oneArray.length; i++) {
      myTail.push(oneArray[i]);
    }
    return myTail;
  }
};
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const words0 = [];
const words1 = ['one'];
tail(words); // no need to capture the return value since we are not checking it
console.log(tail(words0)); // empty array
console.log(tail(words1)); // array with one element
assertEqual(words.length, 3); // original array should still have 3 elements!
