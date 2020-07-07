var flipAndInvertImage = function(matrix) {
  var outsideArray = [];
  for (var i = 0; i < matrix.length; i++) {
    var insideArray = [];
      var innerMatrix = matrix[i]
      for (var j = 0; j < innerMatrix.length; j++) {
        if (innerMatrix[j] === 1) {
          innerMatrix[j] = 0;
        } else {
          innerMatrix[j] = 1;
        }
        insideArray.unshift(innerMatrix[j])
      }
      outsideArray.push(insideArray)
    }
    return outsideArray
};


var input = [[1,1,0],[1,0,1],[0,0,0]]

 var expectedOutput = [[1,0,0],[0,1,0],[1,1,1]]

 var actualOutput = flipAndInvertImage(input)

if (expectedOutput == actualOutput) {
  console.log ('Success!')
} else {
  console.log ('Failed! Expected: ', expectedOutput, '\nActual: ', actualOutput)
}