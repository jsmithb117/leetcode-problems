/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morse = {
    a:".-",
    b:"-...",
    c:"-.-.",
    d:"-..",
    e:".",
    f:"..-.",
    g:"--.",
    h:"....",
    i:"..",
    j:".---",
    k:"-.-",
    l:".-..",
    m:"--",
    n:"-.",
    o:"---",
    p:".--.",
    q:"--.-",
    r:".-.",
    s:"...",
    t:"-",
    u:"..-",
    v:"...-",
    w:".--",
    x:"-..-",
    y:"-.--",
    z:"--.."
  }
  let newSet = new Set();
  for (var i = 0; i < words.length; i++) {
    var newWord = ''
    for (var j = 0; j < words[i].length; j++) {
      newWord = newWord.concat(morse[words[i][j]])
    }
    newSet.add(newWord);
  }
  var arr = []
  newSet.forEach((e) => arr.push(e))
  return arr.length;
};

var words = ["gin", "zen", "gig", "msg"];
console.log (uniqueMorseRepresentations(words));
