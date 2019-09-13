const Node = require('../structures/TreeNode');

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.right.left = new Node(6);
root.right.right = new Node(20);

var isValidBST = function(head) {
  if (!head) {
    return true;
  }

  function is(root, min, max) {
    if (!root.left && !root.right) {
      return true;
    }

    if (root.left && !root.right) {
      return root.left.val < root.val
        && max ? root.left.val < max : is(root.left, min, max ? max : root.val);
    }

    if (root.right && !root.left) {
      return root.right.val > root.val
        && min ? root.right.val > min : is(root.right, min ? min : root.val, max)
    }

    if (root.right && root.left) {
      return root.right.val > root.val
        && root.left.val < root.val
        && max ? root.left.val > max
        && root.right.val > min
        && is(root.right, root.val, max)
        && is(root.left, min, root.val);
    }


  }

  return is(head, null, null);
};

console.log(isValidBST(root));