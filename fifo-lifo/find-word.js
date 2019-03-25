const gridPresentHorizontaly = [
  ['a', 'b', 'c', 'd', 'e'],
  ['b', 'b', 'c', 'd', 'e'],
  ['c', 'a', 'b', 'e', 'l'],
  ['d', 'b', 'c', 'd', 'e'],
  ['e', 'b', 'c', 'd', 'e']
];

const gridPresentVerticaly = [
  ['d', 'm', 'c', 'd', 'e', 'f'],
  ['a', 'b', 'c', 'd', 'e', 'd'],
  ['b', 'l', 'c', 'd', 'e', 'k'],
  ['c', 'a', 'b', 'e', 'l', 'g'],
  ['d', 'm', 'c', 'd', 'e', 's'],
  ['e', 'e', 'c', 'd', 'e', 'a']
];

const gridPresentBottomVerticaly = [
  ['d', 'm', 'c', 'd', 'e', 'b'],
  ['a', 'b', 'e', 'd', 'e', 'd'],
  ['b', 'd', 'm', 'd', 'e', 'k'],
  ['c', 'h', 'f', 'e', 'l', 'g'],
  ['d', 's', 'l', 'd', 'e', 's'],
  ['e', 'e', 'm', 'a', 'l', 'b']
];

function isPresent(grid, word) {
  function verify(grid, x, y, direction) {
    if (direction === 'right-left') {
      for (let n = y, k = 0; k < word.length; n--, k++) {
        if (grid[x][n] !== word[k]) return false;
      }

      return true;
    }
    if (direction === 'left-right') {
      for (let n = y, k = 0; k < word.length; n++, k++) {
        if (grid[x][n] !== word[k]) return false;
      }

      return true;
    }
    if (direction === 'top-bottom') {
      for (let n = x, k = 0; k < word.length; n++, k++) {
        if (grid[n][y] !== word[k]) return false;
      }

      return true;
    }
    if (direction === 'bottom-top') {
      for (let n = x, k = 0; k < word.length; n--, k++) {
        if (grid[n][y] !== word[k]) return false;
      }

      return true;
    }
  }

  let result;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === word[0]) {
        if (grid.length - j >= word.length) {
          result = verify(grid, i, j, 'left-right');
          if (result) {
            return true;
          }
        }
        if (j >= word.length) {
          result = verify(grid, i, j, 'right-left');
          if (result) {
            return true;
          }
        }
        if (grid.length - i >= word.length) {
          result = verify(grid, i, j, 'top-bottom');
          if (result) {
            return true;
          }
        }
        if (i >= word.length) {
          result = verify(grid, i, j, 'bottom-top');
          if (result) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

console.log(isPresent(gridPresentBottomVerticaly, 'blome'));