
var balancedStringSplit = function(s) {
  let count = 0,
  l = 0,
  r = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'R') { r++ };
    if (s[i] === 'L') { l++ };
    if (r == l) { count++ };
    // r, l = 0
  }
  return count
};



console.log (balancedStringSplit("RLRRLLRLRL"))//4
// console.log (isBalanced("LLRR"))
