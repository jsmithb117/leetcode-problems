/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  //iterate nums
  for (var i = 0; i < nums.length; i++)
    //if nums[i] > nums[i+1]
      //
};

var isNonDecreasing = function (array) {
  //iterate array
  for (var i = 0; i < array.length - 1; i++) {
    //if nums[i] > nums[i+1]
    if (array[i] > array[i+1]) {
      return false;
    }
  }
  return true;
}