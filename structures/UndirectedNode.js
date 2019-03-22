'use strict';

let $id = 1;
const getId = () => $id++;

module.exports = class UndirectedNode {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
    this.$id = getId();
  }
};