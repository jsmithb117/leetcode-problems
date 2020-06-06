



var removeKdigits = function(num, k) {
  //base case is, k is 0
  if (k === 0) {
    return num;
  }
  //create 'smallest' variable, instantiate to num
  var smallest = num;
  //iterate num string
  for (var i = 0; i < num.length; i++) {
    //remove one element
    var newNum = num.slice(0,i).concat(num.slice(i+1));
      //if string is smaller than smallest
      if (newNum < smallest) {
        //reassign smallest to num string
        smallest = newNum;
      }
  }
  //decrement k
  k--;
  //return removeKdigits(smallest, k)
  return smallest
};

// console.log(str.slice(i+1));
// console.log (str.slice(0, i));



var input = "1432219"
var k = 3

console.log(removeKdigits(input, k))