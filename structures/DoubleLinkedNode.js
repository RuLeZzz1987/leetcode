module.exports = class DoubleLinkedNode {
  constructor(val) {
    this.val = val;
    this.next = this.prev = null;
  }
};