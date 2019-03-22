var reverseString = function(s) {
  function reverse(s, left, right) {
    if (left >= right) {
      return;
    }

    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    reverse(s, left + 1, right - 1);
  }

  reverse(s, 0, s.length - 1)
};
const s = ["h","e","l","l","o"];
reverseString(s);
console.log(s);