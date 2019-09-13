var numDecodings = function(s) {
  if (s === '0') return 0;

  const r = [];
  for (let i = 0; i < s.length; i++) {
    r[i] = (r[i - 1] || 1) + de(+s[i], s[i - 1]);
  }

  function de(num, prevNum = null) {
    if (prevNum !== null) {
      if (+prevNum === 1) {
        return num !== 0 ? 1 : 0;
      } else if (+prevNum === 2) {
        return num > 0 && num < 7 ? 1 : 0
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  return r[r.length - 1];
};

console.log(numDecodings('100'));