const Node = require('../structures/Node');

const head = new Node(2);
head.next = new Node(1);
head.next.next = new Node(5);

var nextLargerNodes = function(head) {
  const result = [];
  while (head) {
    let max = head.val;
    let n = head;
    while (n) {
      if (n.val > max) {
        max = n.val;
      }
      n = n.next;
    }
    if (max === head.val) {
      result.push(0);
    } else {
      result.push(max);
    }
    head = head.next;
  }
  return result;
};

console.log(nextLargerNodes(head))