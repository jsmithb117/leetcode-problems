// var sortArrayByParity = function(inputArray) {
//   var outputArray = [];
//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] % 2 === 0) {
//        outputArray.push(inputArray[i])
//       }
//   }
//   for (let j = 0; j < inputArray.length; j++) {
//     if (inputArray[j] % 2 !== 0) {
//       outputArray.push(inputArray[j])
//     }
//   }
//   return outputArray
// };

// var sortArrayByParity = (inputArray) => inputArray.filter((elem) => elem % 2 === 0).concat(inputArray.filter((elem) => elem % 2 !== 0));

var sortArrayByParity = function(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
       outputArray.unshift(inputArray[i])
    } else {
      outputArray.push(inputArray[i])
    }
  }

  return outputArray
};

var input = [3,1,2,4]
// Output: [2,4,3,1]
console.log (sortArrayByParity(input))