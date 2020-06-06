var busyStudent = function(startTime, endTime, queryTime) {
  var count = 0;
  //iterate startTime
  for (var i = 0; i < startTime.length; i++) {
    //if start elem is before queryTime, and end elem is after queryTime
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      //increment count
      count++;
    }
  }
  return count
};


console.log (busyStudent([1,2,3], [3,2,7], 4))//1