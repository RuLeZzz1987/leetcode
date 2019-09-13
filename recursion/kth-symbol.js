var kthGrammar = function(N, K) {

  function gram(i, row) {
    if (i === N) {
      return row[K - 1];
    }

    gram(i + 1, row.split('').map(l => l === '0' ? '01' : '10').join(''));
  }

  return gram(1, '0');
};

console.log(kthGrammar(30, 5));