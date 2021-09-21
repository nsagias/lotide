const assert = require('chai').assert;
const middle = require('../middle');


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
  it("it returns two middle values if even: [2,3]", ()=> {
    const numArray = [1, 2, 3, 4];
    const result = middle(numArray);
    const expectedResult = [2,3];
    assert.deepEqual(result, expectedResult);
  });
  it("it returns two middle values if even: [3,4]", ()=> {
    const numArray = [1, 2, 3, 4, 5, 6];
    const result = middle(numArray);
    const expectedResult = [3,4];
    assert.deepEqual(result, expectedResult);
  });
});
