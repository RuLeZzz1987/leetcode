

function triangle(n) {
  if (n === 1) {
    return 1;
  }

  return triangle(n - 1) + n;
}

console.log(triangle(3));