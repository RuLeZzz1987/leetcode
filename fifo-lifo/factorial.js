

function factorial(n) {
  const stack = [];
  while (n > 1) {
    stack.push(n);
    n--;
  }

  let result = 1;
  while(stack.length) {
    result *= stack.pop();
  }

  return result;
}

console.log(factorial(10));