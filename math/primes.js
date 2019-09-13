
function calcPrimesCount(n) {
  if (n <= 2) {
    return 0;
  }

  const primes = new Array(n).fill(true);
  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let k = i * i; k <= n; k += i) {
        primes[k] = false;
      }
    }
  }

  return primes.filter(e => e).length - 2;
}


console.log(calcPrimesCount(3));