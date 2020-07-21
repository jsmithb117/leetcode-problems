var average = function(salary) {
  var sorted = salary.sort((a, b) => a - b)
  sorted.pop()
  sorted.shift()
  var total = sorted.reduce((acc, cur) => acc + cur)
  var averageSalary = total / sorted.length
  return averageSalary
};

salary = [1000,2000,3000]
console.log (average(salary))