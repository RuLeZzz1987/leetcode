'use strict';

const Node = require('./Node');

module.exports = class Stack {

  constructor() {
    this.head = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  pop() {
    if (!this.head) {
      throw new Error('stack is empty');
    }

    const node = this.head;
    this.head = this.head.next;

    return node.val;
  }

  peek() {
    return this.head ? this.head.val : this.head;
  }

  isEmpty() {
    return !this.head;
  }

};