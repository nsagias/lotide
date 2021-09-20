const tail = require('../tail.js');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
let result1 = tail(words);

assertEqual(result1.length, 2); // original array should still have 3 elements!
assertArraysEqual(result1, ["Lighthouse", "Labs"]);
