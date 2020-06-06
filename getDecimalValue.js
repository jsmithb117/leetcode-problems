/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function(head) {
  //create 'flatten' function that collapses the linked list to a flat array
  const flatten = function(list, arr) {
    //base case, list.val is null
    if (list === null) {
      return arr;
    } else {
      arr.push(list.val);
      return flatten(list.next, arr);
    }
  }
  let flatArray = flatten(head, []);
  ////convert flatArray from binary to decimal
  //iterate flatArray
  var value = 1;
  var count = 0;
  var len = flatArray.length;
  for (var i = 0; i < len; i++) {
    console.log ('flatArray: ', flatArray, '\ni: ', i)


    //if flatArray.pop is a 1, add value to count
    var current = flatArray.pop()
    if (current === 1) {
      count += value;
    }
    value = value * 2;
  }

  return count;
};

let list1 = { val: 1, next: { val: 0, next: { val: 1, next: null } } }

console.log (getDecimalValue(list1))