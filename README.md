# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@nsagias/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `countLetters(string)`: takes a string of letters/sentence and only counts the letters.
* `countOnly(allItems, itemsToCount)`: takes two arrays, first array: items to count, the second array: what to count.
* `eqArrays(array1, array2)`: takes two arrays and deeply compares if the arrays are equal.
* `eqObjects(object1, object2)`: takes two objects and deeply compares the key names are equal.
* `findKey(object, function)`: takes an object and a callback function to compare the keys.
* `findKeyByValue(object, string)`: takes object and string: uses the string to search object by value.  
* `flatten(array)`: takes an array, if the array has nested arrays it put all the elements into a single array.
* `head(array)`: takes and array and returns the first item in the array.
* `letterPositions(string)`: takes a string/setence and returns all the leters in and object with positions in arrays for each leter.
* `map(array, function)`: takes an array and calback functions and returns and array of the results.
* `middle(array)`: takes an array, returns middle of array, if odd length array single value, if even the two middle calues
* `tail(array)`: takes an array, slices off the first value and returns the remaining values in an array
* `takeUntil(array1, function)`: takes an array and a callback, returns an array with every value up until the callback condition has been met.
* `without(array1, arrayOfItemsToRemoce)`: takes two arrays, one is the source and the second is is the array of items to remove from source array.