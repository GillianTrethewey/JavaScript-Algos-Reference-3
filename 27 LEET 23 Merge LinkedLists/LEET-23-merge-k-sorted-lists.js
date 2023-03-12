/*You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
*/

const merge = (left, right) => {
  if (!left) {
    return right;
  } else if (!right) {
    return left;
  } else if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
};

const helper = (lists, start, end) => {
  if (start === end) {
    return lists[start];
  } else if (start < end) {
    const mid = parseInt((start + end) / 2);
    const left = helper(lists, start, mid);
    const right = helper(lists, mid + 1, end);
    return merge(left, right);
  } else {
    return null;
  }
};

const mergeKLists = (lists) => {
  return helper(lists, 0, lists.length - 1);
};
