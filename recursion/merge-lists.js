'use strict';

const Node = require('../structures/Node');

const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(4);

const l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(4);

var mergeTwoLists = function(l1, l2) {
  let head;
  let tail;
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  if (l1.val >= l2.val) {
    head = new Node(l2.val);
    tail = head;
    l2 = l2.next;
  } else {
    head = new Node(l1.val);
    tail = head;
    l1 = l1.next;
  }

  function merge(tail, l1, l2) {
    if (!l1) {
      tail.next = l2;
      return;
    }
    if (!l2) {
      tail.next = l1;
      return;
    }

    if (l1.val >= l2.val) {
      tail.next = l2;
      l2 = l2.next;
    } else {
      tail.next = l1;
      l1 = l1.next;
    }

    merge(tail.next, l1, l2);

  }

  merge(tail, l1, l2);

  return head;
};

console.log(mergeTwoLists(l1, l2));