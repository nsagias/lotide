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
  const results = {};
  // get each letter from sentence
  for (const letter in sentence) {
    // if in object update with +1
    if (results[sentence[letter]]) {
      results[sentence[letter]] += 1;
    }
    // if not in object add to object with initial value 1
    if (!results[sentence[letter]]) {
      results[sentence[letter]] = 1;
    }
  }
  return results;
};

let sentence = "tenet";

const result1 = countLetters(sentence);
console.log('letter in result', result1);

assertEqual(result1["t"], 2);
assertEqual(result1["d"], undefined);
assertEqual(result1["n"], 1);
assertEqual(result1["c"], undefined);



