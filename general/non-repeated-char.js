var firstUniqChar = function(s) {
  let m = {};
  for (let i = 0; i < s.length; i++) {
    if (!m[s[i]]) {
      m[s[i]] = {idx: i, count: 1}
    } else {
      m[s[i]].count++;
    }
  }
  for (let i in m) {
    if (m.hasOwnProperty(i) && m[i].count === 1) {
      return m[i].idx;
    }
  }

  return -1;
};

console.log(firstUniqChar('leetcode'));