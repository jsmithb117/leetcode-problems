/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let output = [];
  //iterate arr (i)
  for (let i = 0; i < arr.length; i++) {
    //let greatest = arr[i]
    let greatest = arr[i];
    //iterate arr, beginning at i (j)
    for (let j = i; j < arr.length; j++) {
      //if arr[j] > greatest
      if (arr[j] > greatest) {
        //greatest = arr[j]
        greatest = arr[j];
      }
    }
    //if last element, output[i] = -1
      if (i = arr.length - 1) {
        output[i] = -1;
      } else {//else output[i] = greatest
        output[i] = greatest;
      }
  }
  return output;
};

let arr = [17,18,5,4,6,1]
console.log (replaceElements(arr))// [18,6,6,6,1,-1]