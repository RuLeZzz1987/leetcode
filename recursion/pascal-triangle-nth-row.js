var getRow = function(rowIndex) {
  function gen(row, cur, rowIndex) {
    if (cur > rowIndex) {
      return row;
    }
    const next = [];
    for (let i = 0; i < row.length; i++) {
      const left = row[i - 1] === undefined ? 0 : row[i - 1];
      const right = row[i];
      next.push(left + right);
    }
    next.push(1);

    return gen(next, cur + 1, rowIndex);
  }

  return gen([], 0, rowIndex);
};

console.log(getRow(5));