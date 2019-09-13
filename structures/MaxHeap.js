
const BinaryHeap = require('./BinaryHeap');

class MaxHeap extends BinaryHeap {

  shouldSwap(childIdx, parentIdx) {
    return this.store[childIdx] > this.store[parentIdx];
  }

}

module.exports = MaxHeap;