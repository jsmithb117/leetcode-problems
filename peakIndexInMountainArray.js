var peakIndexInMountainArray = function(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i+1] < array[i]) {
      return i
    }
  }
};


var input = [0,1,2,3,2,1,0] //3
console.log (peakIndexInMountainArray(input))
