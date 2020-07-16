var sortedSquares = function(input) {
  var squared = [];
  input.forEach((elem) => squared.push(elem ** 2))
  return squared.sort((a,b) => a - b)
};

var input = [-7,-3,2,3,11]
console.log (sortedSquares(input))