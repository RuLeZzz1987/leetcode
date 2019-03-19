'use strict';

const Node = require('./Node');

module.exports = class Queue {

  constructor() {
    this.first = this.last = null;
  }

  isEmpty() {
    return !this.first;
  }

  enqueue(val) {
    const node = new Node(val);
    if (this.last) {
      this.last.next = node;
    }

    this.last = node;

    if (!this.first) {
      this.first = this.last;
    }
  }

  dequeue() {
    if (!this.first) {
      throw new Error('queue is empty');
    }

    const node = this.first;
    this.first = this.first.next;

    if (!this.first) {
      this.last = null;
    }

    return node.val;
  }

  peek() {
    return this.first ? this.first.val : null;
  }

};