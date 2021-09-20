const head =  require('../head.js');
const assertEqual = require('../assertEqual.js');

// tests
assertEqual(head([]), undefined);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");