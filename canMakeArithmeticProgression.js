var canMakeArithmeticProgression = function(arr) {
  var sorted = arr.sort((a,b) => a-b)
  var dif = sorted[1] - sorted[0]
  for (var i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] !== dif) {
      return false
    }
  }
  return true
};

var input = [2,4,6]
console.log (canMakeArithmeticProgression(input))