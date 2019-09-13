class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.store = new Map();
  this.recent = {
    head: null,
    tail: null,
    addToHead(val) {
      const node = new Node(val);

      if (!this.head) {
        this.head = node;
        this.tail = node;
        return;
      }

      const head = this.head;
      this.head.prev = node;
      this.head = node;
      node.next = head;
    },
    pop() {
      if (!this.head) {
        return null;
      }

      const node = this.tail;
      const {prev} = node;

      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
        return node;
      }

      this.tail = prev;
      prev.next = null;
      return node;
    },
    bubbleUp(node) {
      if (node === this.head) return;
      if (node === this.tail) {
        node.prev.next = null;
        this.tail = node.prev;
        node.prev = null;

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        return;
      }

      const {prev, next} = node;
      prev.next = next;
      next.prev = prev;

      node.prev = null;
      node.next = this.head;
      this.head.prev = node;
      this.head = node;

    },
    peek() {
      return this.head;
    }
  }
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.store.get(key);
  if (!node) {
    return -1;
  }

  this.recent.bubbleUp(node);

  return node.val.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this._hasKey(key)) {
    this._updateKey(key, value);
    return;
  }

  if (this._hasCapacity()) {
    this._put(key, value);
    return;
  }

  this._removeOldest();
  this._put(key, value);
};

LRUCache.prototype._put = function(key, value) {
  this.recent.addToHead({value, key});
  const node = this.recent.peek();
  this.store.set(key, node);
}

LRUCache.prototype._removeOldest = function() {
  const oldestNode = this.recent.pop();
  this.store.delete(oldestNode.val.key);
}

LRUCache.prototype._hasCapacity = function() {
  return this.capacity > this.store.size;
}

LRUCache.prototype._updateKey = function(key, value) {
  const node = this.store.get(key);
  node.val.value = value;
  this.recent.bubbleUp(node);
}

LRUCache.prototype._hasKey = function (key) {
  return this.store.get(key) instanceof Object;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



const cache = new LRUCache(2);
console.log([cache.put(2, 1) || null,
cache.put(1, 1) || null,
cache.put(2, 3) || null,
cache.put(4, 1) || null,
cache.get(1),
cache.get(2)]);
console.log([null,null,null,null,-1,3]);