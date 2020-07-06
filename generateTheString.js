/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  var output = '';
  if (n % 2 !== 0) {
    for (var i = 0; i < n; i++) {
      output = output.concat('a')
    }
  } else {
    for (var i = 0; i < n-1; i++) {
      output = output.concat('a')
    }
    output = output.concat('b')
  }
  return output
};

// Input: n = 4
// Output: "pppz"

// Input: n = 7
// Output: "holasss"

console.log (generateTheString(4))
console.log (generateTheString(7))