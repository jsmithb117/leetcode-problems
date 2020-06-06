/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let seconds = 0;
  let len = points.length -1;
  for (var i = 0; i < len; i++) {
    seconds = next(points[i][0], points[i+1][0], points[i][1], points[i+1][1], seconds)
  }
  return seconds;
};

var next = function (x1, x2, y1, y2, seconds) {
  console.log ('calling next')
  while (x1 !== x2 || y1 !== y2) {
    console.log ('before \n1 is: [', x1, ', ', y1, ']\n2 is: [', x2, ', ', y2, ']\nseconds is: ', seconds)
    if (x1 < x2) {
      x1++;
    } else if (x1 > x2) {
      x1--;
    }
    if (y1 < y2) {
      y1++;
    } else if (y1 > y2) {
      y1--;
    }
    seconds++;
    console.log ('after \n1 is: [', x1, ', ', y1, ']\n2 is: [', x2, ', ', y2, ']\nseconds is: ', seconds)
  }
  return seconds;
}

console.log (minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))//7
console.log (minTimeToVisitAllPoints([[3,2],[-2,2]]))//5
