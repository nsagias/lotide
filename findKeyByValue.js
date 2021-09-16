const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, string) {
  let results = "";
  let newObject = Object.keys(object)
  for (let i = 0; i < newObject.length; i++) { 
    console.log('object: ',object[newObject[i]])
    // console.log('object: ',Object.keys(obj)[i]); 
  } 
  return results;
};


// test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // 