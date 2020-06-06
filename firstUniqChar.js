
//  Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

//  Examples:

//  s = "leetcode"
//  return 0.

//  s = "loveleetcode",
//  return 2.

//  Note: You may assume the string contain only lowercase letters.

var firstUniqChar = function(s) {
  //create storage Map
  var storage = new Map();
  //iterate string
  for (var i = 0; i < s.length; i++) {
    //if letter does not exist in storage
    if(!storage.get(s[i])) {
      // console.log (s[i], ' does not exist')
      //create object that contains original index, and count (initially set to 1)
      var obj = {'index': i,
      'count': 1}
      //set letter: object
      storage.set(s[i], obj)
      // console.log (s[i], ' should exist: ', storage.get(s[i]))
      //else
    } else {
      //increment count
      var newObj = storage.get(s[i]);
      newObj.count++;
      // console.log (s[i], ' should exist in else: ', storage.get(s[i]))
    }
  }//for i
  //iterate storage map to find first letter with count === 1
  for (let [key, value] of storage) {
    // console.log(key + ' = ' + JSON.stringify(value));
    //if value === 1
    if (value.count === 1) {
      //return index
      return value.index;
    }
  }
  return -1;
};

var s = "leetcodeleetcode";//should return -1
console.log (firstUniqChar(s));

var s = "leetcode";//should return 0
console.log (firstUniqChar(s));

s = "loveleetcode";//should return 2
console.log (firstUniqChar(s));