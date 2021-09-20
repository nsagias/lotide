const head = function(oneArray) {
  if (oneArray.length === 0) {
    return undefined;
  }
  return oneArray[0];
};

 module.exports = head;