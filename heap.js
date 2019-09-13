const Heap = require('./structures/MaxHeap');

const heap = new Heap();

heap.add(1);
heap.add(10);
heap.add(21);
heap.add(12);
heap.add(5);
heap.add(7);
heap.add(4);
heap.add(3);


while (!heap.isEmpty()) {
  console.log(heap.poll());
}