
const Node = require('../structures/Node');

const root = new Node(1);
root.next = new Node(2);

var isPalindrome = function(head) {
  if (!head) {
    return true;
  }
  let len = 1;
  let cur = head;
  while(cur.next) {
    cur = cur.next;
    len++;
  }

  cur = head;
  let prev = null;
  let next = null;
  for (let i = 0; i < len / 2; i++) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  let n1 = cur;
  let n2 = len % 2 === 0 ? prev : prev.next;

  while (n1) {
    if (n1.val !== n2.val) {
      return false;
    }
    n1 = n1.next;
    n2 = n2.next;
  }
  return true;
};

console.log(isPalindrome(root));