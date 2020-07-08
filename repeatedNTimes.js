var repeatedNTimes = function(A) {
  //figure out length of the array
    //half the length of the array
  var n = A.length / 2
  //create a new empty object
  var object = {}
  // iterate the array
  for (var i = 0; i < A.length; i++) {
    // if element exists in the array
    if (!!object[A[i]]) {
      // increment the value of the element
      object[A[i]]++
      // else create the key for the element and instantiate to 1
    } else {
      object[A[i]] = 1
    }

  }
  // iterate the object
  for (var elem in object) {
    // if the value equal n
    if (object[elem] === n) {
      // return the key
      return elem
    }
  }
};
var input = [1,2,3,3]

console.log(repeatedNTimes(input))