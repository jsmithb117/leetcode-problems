/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let output = [];
  while (n > 0) {
    let five = (n % 5 === 0);
    let three = (n % 3 === 0);
    let str = '';
    if (five) {
      str = str.concat('Buzz');
    }
    if (three) {
      str = str.concat('Fizz');
    }
    if (!three && !five) {
      str = str.concat(n)
    }
    output.unshift(str);
    n--;
  }
  return output;
};


console.log (fizzBuzz(1))