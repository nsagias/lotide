const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  if (Array.isArray(Object.keys(object1)  === false) || Array.isArray(Object.keys(object1) === false)) {
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

// const assertArraysEqual = function(array1, array2) {
//   const inspect = require('util').inspect;
//   if (eqObjects()) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1,object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } 
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};



// => true
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba); 


// // => false
const aa = { a: "1", b: "2" };
const bb = { b: "1", a: "1" };
assertObjectsEqual(aa, bb); 


// // => false
const abc = { a: "1", b: "2", "c": 3 };
assertObjectsEqual(aa, abc); 

