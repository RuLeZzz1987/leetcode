const inorder = [2, 1]; // [9,3,15,20,7];
const postorder = [2, 1]; // [9,15,7,20,3];

const TreeNode = require('../structures/TreeNode');

const buildTree = function(inorder, postorder) {
    const nodes = inorder.reduce((tree, val, idx) => {
        tree[val] = new TreeNode(inorder[idx]);
        return tree;
    }, {});

    function build(ino, post) {
        if (ino.length === 1) {
            return nodes[post[post.length - 1]];
        }
        if (!ino.length) {
            return null;
        }

        const root = nodes[post.pop()];
        const rootIdx = ino.indexOf(root.val);
        const inLeft = ino.slice(0, rootIdx);
        const postLeft = post.slice(0, rootIdx);
        const inRight = ino.slice(rootIdx + 1);
        const postRight = post.slice(rootIdx);
        root.left = build(inLeft, postLeft);
        root.right = build(inRight, postRight);
        return root;
    }

    return build(inorder, postorder);
};

console.log(buildTree(inorder, postorder));