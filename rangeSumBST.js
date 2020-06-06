/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R, accumulator) {
  ////traverse BST from L to R, adding elements to accumulator, return accumulator
  accumulator = accumulator || 0;
  if (!root) {
    return accumulator;
  }
  //if root.val is between L and R, add it to accumulator
  if (root.val >= L && root.val <= R) {
    accumulator += root.val;
  }
  accumulator += rangeSumBST(root.left, L, R);
  accumulator += rangeSumBST(root.right, L, R);
  return accumulator;
};

const root1 =
{
  val: 10,
  left:
   {
     val: 5,
     left: { val: 3, left: null, right: null },
     right: { val: 7, left: null, right: null } },
  right:
   {
     val: 15,
     left: null,
     right: { val: 18, left: null, right: null } } }


console.log (rangeSumBST(root1, 7, 15))
  //        10
  //     5      15
  //   3   7   n   18
  //  n n n n     n  n
