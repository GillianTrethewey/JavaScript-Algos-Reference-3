const Node = require("./Node.js");
const makeLinkedList = require("./makeLinkedList.js");

function reverseLinkedList(linkedList) {
  if (!linkedList) {
    return linkedList;
  }

  let currentNode = linkedList;
  let nextNode = linkedList.next;
  currentNode.next = null;

  while (nextNode) {
    const temp = nextNode.next;
    nextNode.next = currentNode;
    currentNode = nextNode;
    nextNode = temp;
  }

  return currentNode;
}

//Calling your function on an example
console.log("Original");
let exampleLinkedList = makeLinkedList([4, 8, 15]);
exampleLinkedList.print();
console.log("Reversed");
let reversed = reverseLinkedList(exampleLinkedList);
reversed.print();
// Leave this here so we can test your code
module.exports = reverseLinkedList;
