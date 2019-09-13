
const DoubleLinkedNode = require('./DoubleLinkedNode');

module.exports = class DoubleLinkedList {

  constructor() {
    this.head = this.tail = null;
  }

  addToTail(val) {
    const node = new DoubleLinkedNode (val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
  }

  addToHead(val) {
    const node = new DoubleLinkedNode (val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }

    const oldHead = this.head;
    this.head = node;
    this.head.next= oldHead;
    return node;
  }

  removeTail() {
    const node = this.tail;
    const {prev} = node;

    if (!prev) {
      this.head = null;
      this.tail = null;
      return node;
    }

    prev.next = null;
    this.tail = prev;

    return node;
  }
};