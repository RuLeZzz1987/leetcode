const s = "3[a2[c]]"; // aaabcbc
const s2 = "3[a2[c]]"; //  "accaccacc".
const s3 = "2[abc]3[cd]ef"; //  "abcabccdcdcdef".\
const s4 = "3[a]2[bc]";
const s5 = "100[leetcode]";

const decodeString = function(s) {
  const stack = [];
  const str = s.split('');
  while (str.length) {
    const char = str.pop();
    if (char !== '[') {
      stack.push(char);
    } else {
      let count = '';
      while (str.length) {
        const c = str.pop();
        if (/[0-9]/.test(c)) {
          count = `${c}${count}`
        } else {
          str.push(c);
          break;
        }
      }
      count = Number(count);

      const semiResult = [];
      while (stack.length) {
        const ch = stack.pop();
        if (ch === ']') {
          break;
        }
        semiResult.push(ch);
      }
      let tmp = semiResult.join('');
      let f = '';
      for (let i = 0; i < count; i++) {
        f = `${f}${tmp}`;
      }
      stack.push(f);
    }
  }

  let r = '';
  while (stack.length) {
    r += stack.pop();
  }

  return r;
};


console.log(decodeString(s4));