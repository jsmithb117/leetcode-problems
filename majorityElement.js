/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var set = new Set()
  var highCount = 0
  var highLetter = ''
  //populate set
  nums.map(elem => set.add(elem))
  //iterate set
  for (var elem of set) {
    var count = 0;
    //iterate nums to count how many times set element exists in nums
    nums.forEach(num => {
      if (elem === num) {
        count++;
      }
    })
    //if count is greater than highCount
    if (count > highCount) {
      //set highCount
      highCount = count;
      //set highLetter
      highLetter = elem;
    }
  }

  return highLetter;
};

console.log (majorityElement([2,2,1,1,1,2,2])); //2