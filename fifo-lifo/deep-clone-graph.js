'use strict';


const Stack = require('../structures/Stack');
const Node = require('../structures/UndirectedNode');

const node1 = new Node(1, []);
const node2 = new Node(2, []);
const node3 = new Node(3, []);
const node4 = new Node(4, []);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node2, node3);
node3.neighbors.push(node4, node2);
node4.neighbors.push(node1, node3);


/**
 * @param {{val: number, neighbors: *[], $id: string}} root
 * @return {Node}
 */
var cloneGraph = function(root) {
  const stack = new Stack();
  const nodes = new Map();
  stack.push(root);

  while(!stack.isEmpty()) {
    const node = stack.pop();
    let clone;
    if (!nodes.has(node)) {
      clone = new Node(node.val);
      nodes.set(node, clone);
    } else {
      clone = nodes.get(node);
    }

    for (const neighbor of node.neighbors) {
      if (!nodes.has(neighbor)) {
        const neighborClone = new Node(neighbor.val);
        nodes.set(neighbor, neighborClone);
        stack.push(neighbor);
        clone.neighbors.push(neighborClone);
      } else {
        clone.neighbors.push(nodes.get(neighbor));
      }
    }

  }

  return nodes.get(root);
};


console.log(cloneGraph(node1));