var evalRPN = function(tokens) {
  const ops = ['+', '-', '*', '/'];
  const stack = [];
  while (tokens.length) {
    const token = tokens.shift();
    if (ops.includes(token)) {
      const right = stack.pop();
      const left = stack.pop();
      const result = eval(`Math.round(${left} ${token} ${right})`);
      stack.push(result);
    } else {
      stack.push(token);
    }
  }

  return stack.pop();
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));