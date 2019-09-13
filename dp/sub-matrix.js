function subMatrix(matrix, l, k, target) {
  let count = 0;

  const b = new Array(matrix.length - l + 1).fill(0).map(() => new Array(matrix[0].length - k + 1).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (calcSub(matrix, i, j, l, k, target)) {
        count++;
      }
    }
  }

  function calcSub(matrix, i, j, l, k, target) {
    let sum = 0;
    if (matrix.length - i - k >= 0 && matrix[i].length - j - l >= 0) {
      for (let m = 0; m < l; m++) {
        for (let n = 0; n < k; n++) {
          sum += matrix[i + m][j + n];
        }
      }

      return sum === target;
    }

    return false;
  }

  return count;
}

const matrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

const start = Date.now();

console.log(subMatrix(matrix, 3, 3, 9), Date.now() - start);

// (n*l*k)^2;