
const Node = require('../structures/Node');

const first = new Node(1);
first.next = new Node(2);
first.next.next = new Node(3);
first.next.next.next = new Node(4);

var swapPairs = function(head) {
  if (!head) {
    return;
  }
  const second = head.next;
  const third = second.next;
  second.next = head;
  head.next = swapPairs(third);
  return second;
};

console.log(swapPairs(first));