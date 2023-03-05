// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const checkTree = (root) => {
  return root.val === root.left.val + root.right.val;
};

//[10,4,6] => true
//[5,3,1] => false

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// function makeTree(arr) {
//   if (!arr) return null; // empty tree
//   const values = arr[Symbol.iterator]();
//   const root = new TreeNode(values.next().value);
//   const queue = new Set().add(root);
//   for (const node of queue) {
//     for (const side of ["left", "right"]) {
//       const value = values.next().value;
//       if (value != null) queue.add((node[side] = new TreeNode(value)));
//     }
//   }
//   return root;
// }

// // Example use
// const arr = [3, 9, 20, null, null, 15, 7];
// const root = makeTree(arr);
// console.log(root);

// {
//   "val": 3,
//   "left": {
//     "val": 9,
//     "left": null,
//     "right": null
//   },
//   "right": {
//     "val": 20,
//     "left": {
//       "val": 15,
//       "left": null,
//       "right": null
//     },
//     "right": {
//       "val": 7,
//       "left": null,
//       "right": null
//     }
//   }
// }
