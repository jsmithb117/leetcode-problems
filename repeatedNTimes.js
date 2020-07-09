var repeatedNTimes = function(A) {
  var n = A.length / 2
  var object = {}
  for (var i = 0; i < A.length; i++) {
    if (!!object[A[i]]) {
      object[A[i]]++
    } else {
      object[A[i]] = 1
    }

  }
  for (var elem in object) {
    if (object[elem] === n) {
      return elem
    }
  }
};
var input = [1,2,3,3]

console.log(repeatedNTimes(input))