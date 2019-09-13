const arr = [5, 10, 23, 5, 3, 1, 100, 11];

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const divider = arr.length / 2 | 0;
  return merge(mergeSort(arr.slice(0, divider)), mergeSort(arr.slice(divider)));
}

function merge(arr1, arr2) {
  const result = [];

  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  if (i === arr1.length) {
    for (; j < arr2.length; j++) {
      result.push(arr2[j]);
    }
  } else if (j === arr2.length) {
    for (; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  }

  return result;
}

console.log(mergeSort(arr));