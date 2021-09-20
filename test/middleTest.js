const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


describe("#middle", () =>{
  it("it returns and empty array if given empty array", ()=> {
    const numArray = [1];
    const result = middle(numArray);
    const expectedResult = [];
    assert.deepEqual(result, expectedResult);
  });
  it("returns and empty array if given 1 value", ()=> {
    const numArray = [1];
    const result = middle(numArray);
    const expectedResult = [];
    assert.deepEqual(result, expectedResult);
  });
  it("returns and empty array if given 2 value", ()=> {
    const numArray = [1,2];
    const result = middle(numArray);
    const expectedResult = [];
    assert.deepEqual(result, expectedResult);
  });
  it("should return middle number if odd array length: returns 2", ()=> {
    const numArray = [1,2,3];
    const result = middle(numArray);
    const expectedResult = [2];
    assert.deepEqual(result, expectedResult);
  });
  it("should return middle number if odd array length: returns 3", ()=> {
    const numArray = [1,2,3,4,5];
    const result = middle(numArray);
    const expectedResult = [3];
    assert.deepEqual(result, expectedResult);
  });
  // console.log('EVEN should return the two middle values');
    assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
    assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

  it("it returns and empty array if given 2 value", ()=> {
    const numArray = [1,2];
    const result = middle(numArray);
    const expectedResult = [];
    assert.deepEqual(result, expectedResult);
  });
  // it("it returns and empty array if given 2 value", ()=> {
  //   const numArray = [1,2];
  //   const result = middle(numArray);
  //   const expectedResult = [];
  //   assert.deepEqual(result, expectedResult);
  // });
  
});
