var sumZero = function(n) {
  var arr = [];

  //if n is odd
  if (n % 2 !== 0) {
    //iterate n times
    for (var i = 0; i < n; i++) {
      //if i is 0
      if (i === 0) {
        //push a 0
        arr.push(0)
      } else if (i % 2 === 0) {
        //else if i is even
        //push +i
        var acc = 0;
        var total = arr.reduce((acc, val) => acc = val + acc)
        arr.push (0 - total)

      } else {
        //else
        //make array total equal 0
        arr.push(i)
      }
    }
  } else { //else n is even
      for (var i = 0; i < n; i++) {
        if (i === 0) {
          arr.push(n)
        } else if (i % 2 !== 0) {
          var acc = 0;
          var total = arr.reduce((acc, val) => acc = val + acc)
          arr.push (0 - total)
        } else { //else
          arr.push(i)

        }
      }
    }
    return arr
};

n = 5
console.log (sumZero(n))
console.log (sumZero(4))