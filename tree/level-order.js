function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {

    constructor() {
        this.first = null;
        this.last = null;
    }

    isEmpty() {
        return !this.first
    }

    enqueue(val) {
        const node = new Node(val);
        if (this.last) {
            this.last.next = node;
        }

        this.last = node;

        if (!this.first) {
            this.first = this.last;
        }
    }

    dequeue() {
        if (!this.first) {
            throw new Error('queue is empty')
        }

        const node = this.first;
        this.first = this.first.next;

        if (!this.first) {
            this.last = null;
        }

        return node.val;
    }

}

var levelOrder = function (root) {
    const result = [];
    if (!root) {
        return result;
    }
    const fQueue = new Queue();
    const lQueue = new Queue();
    fQueue.enqueue(root);
    while (!fQueue.isEmpty()) {
        const layer = [];
        while (!fQueue.isEmpty()) {
            const node = fQueue.dequeue();
            layer.push(node.val);
            lQueue.enqueue(node);
        }
        result.push(layer);
        while (!lQueue.isEmpty()) {
            const node = lQueue.dequeue();
            if (node.left) {
                fQueue.enqueue(node.left);
            }
            if (node.right) {
                fQueue.enqueue(node.right);
            }
        }

    }
    return result;
};

console.log(levelOrder());