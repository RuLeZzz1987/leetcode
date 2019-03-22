var generate = function(numRows) {
  function gen(num, total, result) {
    if (num === total) {
      return result;
    }
    const layer = result[num - 1] || [];
    result[num] = [];
    for (let i = 0; i < layer.length; i++) {
      const left = layer[i - 1] === undefined ? 0 : layer[i - 1];
      const right = layer [i];
      result[num].push(left + right);
    }
    result[num].push(1);

    return gen(num + 1, total, result);
  }

  return gen(0, numRows, [])
};

console.log(generate(5));