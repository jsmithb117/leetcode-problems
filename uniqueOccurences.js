var uniqueOccurrences = function(arr) {
  var occurences = [];
  while (arr.length > 0) {
    var first = arr[0]
    var filterFirst = arr.filter((elem) => elem === first)
    arr = arr.filter((elem) => elem !== first)
    for (var i = 0; i < occurences.length; i++) {
      if (occurences.includes(filterFirst.length)) {
        return false
      }
    }
    occurences.push(filterFirst.length)
  }
  return true
};

var input = [1,2]
console.log (uniqueOccurrences(input))



//runtime: 5.42
//memory: 5.06

//runtime: 32.33
//memory: 5.06