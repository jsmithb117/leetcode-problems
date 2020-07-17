var luckyNumbers  = function(matrix) {
  var lucky = []
  var indexedMatrix = []

  for (var i = 0; i < matrix.length; i++) {
    var indexedRow = []
    for (var j = 0; j < matrix[i].length; j++) {
      indexedRow.push([matrix[i][j], j])
    }
    indexedMatrix.push(indexedRow)
  }
  for (var i = 0; i < indexedMatrix.length; i++) {
    var lowestBoth = findLowest(indexedMatrix[i])
    var lowestNumber = lowestBoth[0]
    var lowestIndex = lowestBoth[1]
    var largestNumber = findLargest(indexedMatrix, lowestIndex)[0]
    if (lowestNumber === largestNumber) {
      lucky.push(lowestNumber)
    }
  }

  return lucky
};



var findLowest = (arr) => arr.sort((a,b) => a[0] - b[0])[0]

var findLargest = (innerMatrix, index) => {
  var largestArray = []
  for (var i = 0; i < innerMatrix.length; i++) {
    var filtered = innerMatrix[i].filter((elem) => elem[1] === index )
    largestArray.push(filtered[0])
  }
  return largestArray.sort((a,b) => b[0] - a[0])[0]
}

var input = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
console.log (luckyNumbers(input))