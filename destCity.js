/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  let city = (paths[0][1])
  var finished = false;
  function nextCity(city) {
    //iterate paths
    for (var i = 0; i < paths.length; i++) {
      console.log ('city we\'re looking for: ', city, '\narray we\'re looking at: ', paths[i])
      //if 'city' is array's first element
      if (paths[i][0] === city) {
        console.log ('returning: ', paths[i][1])
        //return next city
        return paths[i][1]
      }
    }
    return 'nope'
  }

  while (!finished) {
    let next = nextCity(city)
    if (next !== 'nope') {
      city = next
    } else {
      finished = true;
    }
  }
  return city;
}

console.log (destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))//'A'