const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKey = function(object, callback) {
  //  If no key is found, then it should return undefined.
  let result = undefined;
  // It should scan the object and return the first key
  for (const key in object) {
    if (callback(object[key])) {
      // when callback match condition add key to result
      return result = key;
    }
  }
  return result;
};



findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let testAnonFn = x => x.stars === 2;

let testOutput = "noma";
assertEqual(findKey(testObject,  testAnonFn), testOutput); // => MUST PASS