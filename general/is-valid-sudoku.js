var isValidSudoku = function(board) {
  function verifySquare(x, y) {
    let s = x > 5 ? 6 : x > 2 ? 3 : 0;
    let v = y > 5 ? 6 : y > 2 ? 3 : 0;
    for (let k = s; k < s + 3; k++) {
      for (let n = v; n < v + 3; n++) {
        if (board[k][n] === board[x][y] && k !== x && n !== y) {
          return false;
        }
      }
    }
    return true;
  }

  function verifyLine(x, y) {
    for (let k = 0; k < len; k++) {
      if (board[x][y] === board[x][k] && k !== y) {
        return false;
      }
    }
    return true;
  }

  function verifyCol(x, y) {
    for (let k = 0; k < len; k++) {
      if (board[x][y] === board[k][y] && k !== x) {
        return false;
      }
    }
    return true;
  }

  const len = board.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] !== '.') {
        if (!verifyLine(i, j) || !verifyCol(i, j) || !verifySquare(i, j)) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));