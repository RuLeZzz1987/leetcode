var rotate = function(matrix) {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const temp = matrix[j][len - 1 - i];
      matrix[j][len - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  console.log(matrix);
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));