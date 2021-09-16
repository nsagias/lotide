const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * The function should take in a sentence (as a string) 
 * and then return a count of each of the letters in that sentence.
 */

const countLetters = function(sentence) {
  const result = {};
  return result;
};

let sentence = "tenet";
const result1 = countLetters(sentence);


assertEqual(result1["t"], 2);
assertEqual(result1["d"], undefined);
assertEqual(result1["n"], 2);
assertEqual(result1["c"], undefined);



