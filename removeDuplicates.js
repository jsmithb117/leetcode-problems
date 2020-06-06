/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  //create set
  var numSet = new Set();
  //iterate nums
  for (var i = 0; i < nums.length; i++) {
    //add number to set
    numSet.add(nums[i])
  }
  console.log ('nums before: ', nums)
  //iterate nums, pop all
  var length = nums.length;
  for (var i = 0; i < length; i++) {
    nums.pop();
  }
  for (num of numSet) {
    nums.push(num)
  }
  console.log (nums)
  return nums.length
};

removeDuplicates([1,1,2]) //should log [0,1,2,3,4], should return 5