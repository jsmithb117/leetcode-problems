var selfDividingNumbers = function(left, right) {
  var outputArray = [];
  for (var i = left; i <= right; i++) {
    const numString = i.toString();
    isSelfDividing = true;
    for (var j = 0; j < numString.length; j++) {
      if (i % numString[j] !== 0) {
        isSelfDividing = false;
      }
    }
    if (!!isSelfDividing) {
      outputArray.push(i)
    }
  }
  return outputArray;
};

console.log (selfDividingNumbers(1,22))