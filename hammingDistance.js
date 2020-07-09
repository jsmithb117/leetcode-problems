var hammingDistance = function(x, y) {
  var hammingDistance = 0
  if (x > y) {
    var biggest = x;
    var lowest = y;
  } else {
    var biggest = y;
    var lowest = x;
  }
  var bigBinary = biggest.toString(2)
  var smallBinary = lowest.toString(2)
  for (var i = smallBinary.length; i < bigBinary.length; i++) {
    smallBinary = '0'.concat(smallBinary)
  }
  for (var j = 0; j < bigBinary.length; j++) {
    if (bigBinary[j] !== smallBinary[j]) {
      hammingDistance++
    }
  }
  return hammingDistance
};






console.log(hammingDistance(93,73))