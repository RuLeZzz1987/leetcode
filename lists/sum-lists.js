const ListNode = require('../structures/Node');

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(9);
l2.next = new ListNode(9);

var addTwoNumbers = function(l1, l2) {
  let head = null;
  let sum = null;
  let inMind = false;
  while (l1 || l2) {
    if (l1 && l2) {
      let val = l1.val + l2.val + inMind;
      inMind = false;

      if (val >= 10) {
        val = val % 10;
        inMind = true;
      }
      const node = new ListNode(val);

      if (!sum) {
        sum = node;
        head = node;
      } else {
        sum.next = node;
        sum = sum.next;
      }

      l1 = l1.next;
      l2 = l2.next;
    } else if (l1) {
      let val = l1.val + inMind;
      inMind = false;

      if (val >= 10) {
        val = val % 10;
        inMind = true;
      }

      const node = new ListNode(val);

      if (!sum) {
        sum = node;
        head = node;
      } else {
        sum.next = node;
        sum = sum.next;
      }

      l1 = l1.next;
    } else {
      let val = l2.val + inMind;
      inMind = false;

      if (val >= 10) {
        val = val % 10;
        inMind = true;
      }

      const node = new ListNode(val);

      if (!sum) {
        sum = node;
        head = node;
      } else {
        sum.next = node;
        sum = sum.next;
      }

      l2 = l2.next;
    }
  }

  if (inMind) {
    sum.next = new ListNode(1);
  }

  return head;
};

console.log(addTwoNumbers(new ListNode(1), l2));