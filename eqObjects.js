const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let newObject = Object.keys(object1);
  for (let key of newObject) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba)
assertEqual(eqObjects(ab, ba), true); // => true
g
const aa = { a: "1", b: "2" };
const bb = { b: "1", a: "1" };
assertEqual(eqObjects(aa, bb), false); // => false


const abc = { a: "1", b: "2", "c": 3 };
assertEqual(eqObjects(ab, abc), false); // => false