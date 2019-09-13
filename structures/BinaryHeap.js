
const Queue = require('./Queue');

class BinaryHeap {

  constructor() {
    this.store = [];
  }

  add(val) {
    this.store.push(val);
    if (this.store.length === 1) return;

    let currentIdx = this.store.length - 1;
    let shouldSwap = true;
    while (shouldSwap) {
      const parentIdx = (currentIdx - 1 / 2) | 0;

      if (!this.shouldSwap(currentIdx, parentIdx)) return;

      const temp = this.store[currentIdx];
      this.store[currentIdx] = this.store[parentIdx];
      this.store[parentIdx] = temp;
      currentIdx = parentIdx;
    }
  }

  poll() {
    if (!this.store.length) return null;
    if (this.store.length === 1) {
      return this.store.pop();
    }

    const head = this.store[0];
    this.store[0] = this.store.pop();

    const queue = new Queue();
    queue.enqueue(0);
    while (!queue.isEmpty()) {
      const parentIdx = queue.dequeue();
      let nextIdx = parentIdx;
      const rightChildIdx = nextIdx * 2 + 1;
      const leftChildIdx = nextIdx * 2 + 2;

      if (leftChildIdx < this.store.length && this.shouldSwap(leftChildIdx, nextIdx)) {
        nextIdx = leftChildIdx;
      }

      if (rightChildIdx < this.store.length && this.shouldSwap(rightChildIdx, nextIdx)) {
        nextIdx = rightChildIdx;
      }

      if (parentIdx !== nextIdx) {
        const source = this.store[parentIdx];
        this.store[parentIdx] = this.store[nextIdx];
        this.store[nextIdx] = source;
        queue.enqueue(nextIdx)
      }
    }

    return head;
  }

  peek() {
    return this.store[0];
  }

  isEmpty() {
    return this.store.length === 0;
  }

  size() {
    return this.store.length;
  }

  shouldSwap() {
    throw new Error('Abstract method');
  }

}

module.exports = BinaryHeap;