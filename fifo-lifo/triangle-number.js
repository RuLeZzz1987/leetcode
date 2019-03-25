

function triangle(n) {
  const stack = [];

  while(n > 0) {
    stack.push(n);
    n--;
  }
  let result = 0;
  while(stack.length) {
    result += stack.pop();
  }

  return result;
}


console.log(triangle(10));