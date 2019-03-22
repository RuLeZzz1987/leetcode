
const Queue = require('../structures/Queue');

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (Math.sqrt(n) % 1 === 0) {
    return 1;
  }
  const arr = [];
  for (let i = 1; i * i <= n; i++) {
    arr.push(i * i);
  }

  const queue = new Queue();
  queue.enqueue({n, step: 0});

  while (!queue.isEmpty()) {
    const el = queue.dequeue();
    for (let i = arr.length - 1; i >= 0; i--) {
      const next = el.n - arr[i];
      if (next === 0) {
        return el.step + 1;
      }
      if (next > 0) {
        queue.enqueue({n: next, step: el.step + 1});
      }
    }
  }
};

const start = Date.now();

console.log(numSquares(1024));

console.log(Date.now() - start);