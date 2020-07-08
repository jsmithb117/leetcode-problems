var judgeCircle = function(moves) {
  var ups = 0;
  var downs = 0;
  var lefts = 0;
  var rights = 0;
  var movesArray = moves.split('');
  for (var i = 0; i < movesArray.length; i++) {
    if (movesArray[i] === 'U') {
      ups++;
    } else if (movesArray[i] === 'D') {
      downs++;
    } else if (movesArray[i] === 'L') {
      lefts++;
    } else if (movesArray[i] === 'R') {
      rights++;
    } else {
      console.log ('Error!!!')
    }
  }
  if ((ups === downs) && (rights === lefts)) {
    return true;
  } else {
    return false
  }
};

var input1 = "UD"
console.log (judgeCircle(input1)) //true

var input2 = "LL"
console.log (judgeCircle(input2)) //false