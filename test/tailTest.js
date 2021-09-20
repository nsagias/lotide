const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", ()=> {
  it("returns 2 for array length", ()=> {
    const wordsArray = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(wordsArray);
    const expectedResult = ["Lighthouse", "Labs"];
    assert.deepEqual(result, expectedResult);
  });
  it("return and array of length 2", () => {
    const wordsArray = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(wordsArray).length;
    const expectedResult = 2;
    assert.deepEqual(result, expectedResult);
  });
});