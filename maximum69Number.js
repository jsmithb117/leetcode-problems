/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let numArray = Array.from(String(num));
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] == '6') {
      numArray[i] = '9';
      var str = ''
      for (var i = 0; i < numArray.length; i++) {
        str = str.concat(numArray[i])
      }
      return parseInt(str)
    }
  }
  return num
};

console.log (maximum69Number(9669))
console.log (maximum69Number(9996))
console.log (maximum69Number(9999))

