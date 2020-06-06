// Version 1
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// var kidsWithCandies = function(candies, extraCandies) {
//   //create output array
//   let output = []
//   let highest = 0
//   //for each in candies
//   candies.forEach(e => {
//     //if highest < elem
//     if (highest < e) {
//       //set highest to elem
//       highest = e
//     }
//   })
//   //for each in candies
//   candies.forEach(e => {
//     //if elem + extraCandies >= highest
//     if (e + extraCandies >= highest) {
//       //push true to output
//       output.push(true)
//     } else {//else
//       //push false to output
//       output.push(false)
//     }
//   })
//   return output
// };


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  //create output array
  let output = []
  let highest = Math.max(...candies)
  //for each in candies
  candies.forEach(e => {
    //if elem + extraCandies >= highest
    if (e + extraCandies >= highest) {
      //push true to output
      output.push(true)
    } else {//else
      //push false to output
      output.push(false)
    }
  })
  return output
};


console.log (kidsWithCandies([4,2,1,1,2], 1) ) //[true,true,true,false,true]