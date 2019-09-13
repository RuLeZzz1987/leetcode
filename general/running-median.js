
const MaxHeap = require('../structures/MaxHeap');
const MinHeap = require('../structures/MinHeap');

class Median {

  constructor() {
    this.lower = new MaxHeap();
    this.higher = new MinHeap();
  }

  add(val) {
    if (this.lower.isEmpty() || val < this.lower.peek()) {
      this.lower.add(val);
    } else {
      this.higher.add(val);
    }

    this._rebalance();
  }

  getMedian() {
    if (this.lower.size() === this.higher.size()) {
      return ((this.lower.peek() + this.higher.peek()) / 2).toFixed(1);
    }

    const biggerHeap = this.lower.size() > this.higher.size() ? this.lower : this.higher;

    return biggerHeap.peek();
  }

  _rebalance() {
    const biggerHeap = this.lower.size() > this.higher.size() ? this.lower : this.higher;
    const smallerHeap = this.lower.size() < this.higher.size() ? this.lower : this.higher;

    if (biggerHeap.size() - smallerHeap.size() >= 2) {
      smallerHeap.add(biggerHeap.poll());
    }
  }

}

module.exports = Median;