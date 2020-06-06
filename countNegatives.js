/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function(grid) {
  var accumulator = 0;
  //iterate grid
  for (var i = 0; i < grid.length; i++) {
    //if element is an array, recurse inner array only, add results to accumulator
    if (Array.isArray(grid[i])) {
      accumulator += countNegatives(grid[i]);
    } else if (grid[i] < 0) {//else if element is negative, increment accumulator
      accumulator += 1;
    }
  }
  return accumulator
};


var grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log (countNegatives(grid))