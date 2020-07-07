var judgeCircle = function(moves) {
  var ups = 0;
  var downs = 0;
  var lefts = 0;
  var rights = 0;
  //convert 'moves' into separate letters
  var movesArray = moves.split('');
  //iterate those letters
  for (var i = 0; i < movesArray.length; i++) {
    //count ups
    if (movesArray[i] === 'U') {
      ups++;
    } else if (movesArray[i] === 'D') {
      //count downs
      downs++;
    } else if (movesArray[i] === 'L') {
      //count lefts
      lefts++;
    } else if (movesArray[i] === 'R') {
      //count rights
      rights++;
    } else {
      console.log ('Error!!!')
    }
  }
  //if ups == downs and lefts == rights
  if ((ups === downs) && (rights === lefts)) {
    //return true
    return true;
    //else
  } else {
    //return false
    return false
  }
};

var input1 = "UD"
console.log (judgeCircle(input1)) //true

var input2 = "LL"
console.log (judgeCircle(input2)) //false