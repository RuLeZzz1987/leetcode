'use strict';

const TreeNode = require('../structures/TreeNode');
const Queue = require('../structures/Queue');

var serialize = function(root) {
  const result = [];
  const queue = new Queue();
  queue.enqueue(root);
  while(!queue.isEmpty()){
    const node = queue.dequeue();
    result.push(node ? node.val : node);
    if (node) {
      queue.enqueue(node.left);
      queue.enqueue(node.right);
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
};

const deserialize = function(data) {
  if (!data.length) {
    return null;
  }

  const queue = new Queue();
  const tree = new TreeNode(data[0]);
  let idx = 1;
  queue.enqueue(tree);
  while (!queue.isEmpty()) {
    const root = queue.dequeue();
    const left = data[idx] !== null ? new TreeNode(data[idx]) : null;
    const right = data[idx + 1] ? new TreeNode(data[idx + 1]) : null;
    root.left = left;
    root.right = right;

    if (left) {
      queue.enqueue(left)
    }
    if (right) {
      queue.enqueue(right);
    }
    idx += 2;
  }

  return tree;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(5);

console.log(deserialize(serialize(tree)));