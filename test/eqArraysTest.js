const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// console.log(eqArrays([1, 2, 3], [1, 2, 3]), 'Should be true'); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1]), 'Should be false'); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]),'Should be true'); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]), 'Should be false'); // => false


// Use assertEqual to write test cases for various scenarios.

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL