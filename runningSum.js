var runningSum = function(nums) {
  //create a new array
  var newArray = [];
  //iterate nums
  for (var i = 0; i < nums.length; i++) {
    //create variable
    var newVar = 0
    //iterate nums again
    for (var j = i; j >= 0; j--) {
      newVar = newVar + nums[j]
    }
    newArray.push(newVar)
  }
  return newArray
};

// var input = [1,2,3,4]

// console.log (runningSum(input))

