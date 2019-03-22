'use strict';

const Queue = require('../structures/Queue');

const start = Date.now();

var openLock = function(deadends, target) {
  deadends = new Set(deadends);
  if (deadends.has('0000')) {
    return -1;
  }

  const queue = new Queue();
  queue.enqueue({code: target, moves: 0});
  while (!queue.isEmpty()) {
    const step = queue.dequeue();
    const {code} = step;
    for (let i = 0; i < step.code.length; i++) {
      const next =  code.substr(0, i) + (Number(code[i]) + 1 > 9 ? '0' : Number(code[i]) + 1) + code.substr(i + 1);
      const prev =  code.substr(0, i) + (Number(code[i]) - 1 < 0 ? '9' : Number(code[i]) - 1) + code.substr(i + 1);

      if (next === '0000' || prev === '0000') {
        return step.moves + 1;
      }

      if (!deadends.has(next)) {
        deadends.add(next);
        queue.enqueue({
          code: next,
          moves: step.moves + 1
        });
      }

      if (!deadends.has(prev)) {
        deadends.add(prev);
        queue.enqueue({
          code: prev,
          moves: step.moves + 1,
        });
      }
    }
  }
  return -1;
};

console.log(openLock(["1131","1303","3113","0132","1301","1303","2200","0232","0020","2223"], "3312"));

console.log(Date.now() - start);
