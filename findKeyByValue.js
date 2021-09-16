const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, stringValue) {
  let results = "";
  let newObject = Object.keys(object);
  for (let i = 0; i < newObject.length; i++) {
    if (stringValue === object[newObject[i]]) {
      results = newObject[i];
    }
  }
  return results;
};


// test cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => FAIL