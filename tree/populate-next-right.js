const Node = require('../structures/TreeNode');

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);

var connect = function(root) {
  const queue = [];
  queue.push(root);
  while (queue.length) {
    let current = queue[queue.length - 1];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const next = queue.pop();
      current.next = next;
      if (next.left) {
        queue.unshift(next.left);
      }
      if (next.right) {
        queue.unshift(next.right);
      }
      current = next;
    }
    current.next = null;
  }
  return root;
};

console.log(connect(root));