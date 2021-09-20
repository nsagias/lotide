const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


console.log('one or two elements no middle, should return empty array');
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

console.log('ODD number of elements should return the exact middle odd element');
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log('EVEN should return the two middle values');
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
