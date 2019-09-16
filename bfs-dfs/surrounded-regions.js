/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const n = board.length;
  const m = board[0].length;
  const visited = new Array(n).fill(false).map(() => new Array(m).fill(false));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (isO(i, j) && !isOnBoard(i, j) && !isVisited(i ,j)) {
        bfs(i, j);
      }
    }
  }


  function bfs(i, j) {
    const toBeConverted = [];
    const q = [];
    q.push({x: i, y: j});
    let isTouchingBoard = false;
    while (q.length) {
      const {x, y} = q.shift();
      if (!isOnBoard(x, y) && !isTouchingBoard) {
        toBeConverted.push({x, y});
      } else {
        isTouchingBoard = true;
      }
      if (
        x > 0
        && isO(x - 1, y)
        && !isVisited(x - 1, y)
      ) {
        markVisited(x - 1, y);
        q.push({x: x - 1, y});
      }
      if (
        x + 1 < n
        && isO(x + 1, y)
        && !isVisited(x + 1, y)
      ) {
        markVisited(x + 1, y);
        q.push({x: x + 1, y});
      }
      if (
        y > 0
        && isO(x, y - 1)
        && !isVisited(x, y - 1)
      ) {
        markVisited(x, y - 1);
        q.push({x, y: y - 1});
      }
      if (
        y + 1 < m
        && isO(x, y + 1)
        && !isVisited(x, y + 1)
      ) {
        markVisited(x, y + 1);
        q.push({x, y: y + 1});
      }
    }

    if (!isTouchingBoard) convert(toBeConverted);
  }

  function convert(list) {
    list.forEach(({x, y}) => {
      board[x][y] = 'X';
    })
  }

  function markVisited(i, j) {
    visited[i][j] = true;
  }

  function isVisited(i, j) {
    return visited[i][j];
  }

  function isOnBoard(i, j) {
    return i === 0 || j === 0 || i === n - 1 || j === m - 1;
  }

  function isO(i, j) {
    return board[i][j] === 'O';
  }
};

const board = [
  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O"],
  ["O","X","O","O","O","O","X","O","O","O","O","O","O","O","O","O","O","O","X","X"],
  ["O","O","O","O","O","O","O","O","X","O","O","O","O","O","O","O","O","O","O","X"],
  ["O","O","X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X","O"],
  ["O","O","O","O","O","X","O","O","O","O","X","O","O","O","O","O","X","O","O","X"],
  ["X","O","O","O","X","O","O","O","O","O","X","O","X","O","X","O","X","O","X","O"],
  ["O","O","O","O","X","O","O","X","O","O","O","O","O","X","O","O","X","O","O","O"],
  ["X","O","O","O","X","X","X","O","X","O","O","O","O","X","X","O","X","O","O","O"],
  ["O","O","O","O","O","X","X","X","X","O","O","O","O","X","O","O","X","O","O","O"],
  ["X","O","O","O","O","X","O","O","O","O","O","O","X","X","O","O","X","O","O","X"],
  ["O","O","O","O","O","O","O","O","O","O","X","O","O","X","O","O","O","X","O","X"],
  ["O","O","O","O","X","O","X","O","O","X","X","O","O","O","O","O","X","O","O","O"],
  ["X","X","O","O","O","O","O","X","O","O","O","O","O","O","O","O","O","O","O","O"],
  ["O","X","O","X","O","O","O","X","O","X","O","O","O","X","O","X","O","X","O","O"],
  ["O","O","X","O","O","O","O","O","O","O","X","O","O","O","O","O","X","O","X","O"],
  ["X","X","O","O","O","O","O","O","O","O","X","O","X","X","O","O","O","X","O","O"],
  ["O","O","X","O","O","O","O","O","O","O","X","O","O","X","O","X","O","X","O","O"],
  ["O","O","O","X","O","O","O","O","O","X","X","X","O","O","X","O","O","O","X","O"],
  ["O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O"],
  ["X","O","O","O","O","X","O","O","O","X","X","O","O","X","O","X","O","X","O","O"]
];
solve(board);
console.log(board);
