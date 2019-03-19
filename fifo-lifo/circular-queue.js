/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.arr = new Array(k).fill(-1);
  this.first = this.last = null;
  this.count = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.first === null && this.last === null) {
    this.arr[0] = value;
    this.first = this.last = 0;
    this.count++;
    return true;
  }
  if (this.count >= this.arr.length) {
    return false;
  } else {
    this.last = this.last + 1 === this.arr.length ? 0 : this.last + 1;
    this.arr[this.last] = value;
    this.count++;
    return true;
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.first === null) {
    return false;
  } else {
    this.arr[this.first] = -1;
    this.count--;

    if (this.first === this.last) {
      this.first = this.last = null;
      return true;
    }

    this.first = this.first + 1 === this.arr.length ? 0 : this.first + 1;
    return true;
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.first !== null ? this.arr[this.first] : -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.last !== null ? this.arr[this.last] : -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.first === null && this.last === null;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.count === this.arr.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

const queue = new MyCircularQueue(4);
queue.enQueue(3);
queue.Front();
queue.isFull();
queue.enQueue(7);
queue.enQueue(2);
queue.enQueue(5);
queue.deQueue();
queue.enQueue(4);
queue.enQueue(2);
queue.isEmpty();
queue.Rear();

console.log(queue.arr);

/*
* ["MyCircularQueue","enQueue","Front","isFull","enQueue","enQueue","enQueue","deQueue","enQueue","enQueue","isEmpty","Rear"]
    [[4],[3],[],[],[7],[2],[5],[],[4],[2],[],[]]

    [null,true,3,false,true,true,true,true,true,true,false,2]
    [null,true,3,false,true,true,true,true,true,false,false,4]
*
* */