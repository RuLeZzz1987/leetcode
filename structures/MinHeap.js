
const BinaryHeap = require('./BinaryHeap');

class MinHeap extends BinaryHeap {

  shouldSwap(childIdx, parentIdx) {
    return this.store[childIdx] < this.store[parentIdx];
  }

}

module.exports = MinHeap;