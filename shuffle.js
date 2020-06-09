var shuffle = function(nums, n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(nums[i], nums[n + i])
  }
  return arr
};

const nums = [2,5,1,3,4,7]
const n = 3
console.log (shuffle(nums, n))