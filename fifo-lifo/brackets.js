var isValid = function(s) {
  const arr = s.split('');
  const add = [];
  while(arr.length > 0) {
    const brk = arr.pop();
    if (brk === ')' || brk === '}' || brk === ']') {
      add.push(brk);
    }
    if (brk === '(' && add.pop() !== ')') {
        return false;
    }
    if (brk === '{' && add.pop() !== '}') {
      return false;
    }
    if (brk === '[' && add.pop() !== ']') {
      return false;
    }
  }
  return true;
};

console.log(isValid('()'));