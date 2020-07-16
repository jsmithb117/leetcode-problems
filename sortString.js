// var sortString = function(string) {
//   var sortedString = alphabetize(string)
//   var output = ''
//   var last = '!'
//   while (sortedString.length > 0) {
//     last = '!'
//     var stuff = findSmallest(sortedString, last)
//     while (!!sortedString[findSmallest(sortedString, last)]) {
//       var index = findSmallest(sortedString, last)
//       output = output.concat(sortedString[index])
//       last = sortedString[index]
//       sortedString = sortedString.slice(0,index).concat(sortedString.slice(index + 1))
//     }
//     last = '{'
//     while (!!sortedString[findLargest(sortedString, last)]) {
//       var index = findLargest(sortedString, last)
//       output = output.concat(sortedString[index])
//       last = sortedString[index]
//       sortedString = sortedString.slice(0,index).concat(sortedString.slice(index + 1))
//     }
//   }
//   return output
// };

// var findSmallest = (string, last) => {
//   var lowestLetter = 'a'
//   var lowestIndex = 0
//   var lowestCode = 0
//   for (var i = 0; i < string.length; i++) {
//     var stringCode = string.charCodeAt(i)
//     var lastCode = last.charCodeAt(0)
//     lowestCode = lowestLetter.charCodeAt(0)
//     if (stringCode > lastCode){
//       return i
//     }
//   }
//   return false
// }

// var findLargest = (string, last) => {
//   for (var i = string.length -1 ; i > 0; i--) {
//     var stringCode = string.charCodeAt(i)
//     var lastCode = last.charCodeAt(0)
//     if (stringCode < lastCode){
//       return i
//     }
//   }
//   return false
// }

// var alphabetize = function(string) {
//   var map = [];
//   for (var i = 0; i < string.length; i++) {
//     var letterArray = [];
//     letterArray.push(string[i])
//     letterArray.push(string.charCodeAt(i))
//     letterArray.push(i)
//     map.push(letterArray)
//   }
//   var sorted = map.sort((a, b) => {
//     return a[1] - b [1]
//   })
//   var output = ''
//   for (var i = 0; i < sorted.length; i++) {
//     output = output.concat(sorted[i][0])
//   }
//   return output
// }

// var input1 = "aaaabbbbcccc"
// console.log (sortString(input1))

// var input2 = "rat"
// console.log (sortString(input2))

const months = [1,2,3];
months.sort((a,b) => b - a);
console.log(months);