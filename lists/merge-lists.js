var mergeKLists = function(lists) {
  clean(lists);

  let head = null;
  let tail = null;
  while (lists.length) {
    const node = chooseNext(lists);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }
  }

  function chooseNext(lists) {
    let k = 0;
    let min = lists[0].val;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val < min) {
        min = lists[i].val;
        k = i;
      }
    }

    const next = lists[k];
    lists[k] = lists[k].next;
    if (!lists[k]) {
      lists.splice(k, 1);
    }

    return next;
  }

  function clean(lists) {
    let i = 0;
    while (i < lists.length) {
      if (!lists[i]) {
        lists.splice(i, 1);
      } else {
        i++;
      }

    }
  }

  return head;
};

console.log(mergeKLists([null, null]));