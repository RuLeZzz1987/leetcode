const Node = require('../structures/Node');

const head = new Node(1);
head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);


var removeNthFromEnd = function(head, n) {
  if (!head.next) {
    return null;
  }

  function rm(root) {
    if (root.next) {
      const k = rm(root.next) + 1;
      if (k === n) {
        root.next = root.next.next;
      }
      return k;
    } else {
      return 1;
    }
  }

  rm(head);

  return head;
};


console.log(removeNthFromEnd(head, 2));