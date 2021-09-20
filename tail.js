const tail = function(oneArray) {
  let myTail = [];
  if (oneArray.length === 1 || oneArray[0] === []) {
    return [];
  } else {
    for (let i = 1; i < oneArray.length; i++) {
      myTail.push(oneArray[i]);
    }
    return myTail;
  }
};

module.exports = tail;


