/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let visited = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0]) {
        let ans = find(board, i, j, word, 0, visited);
        console.log(visited);
        visited = {};
        if (ans) return true;
      }
    }
  }
  return false;
};

function find(board, i, j, word, curr, visited) {
  if (curr == word.length) {
    return true;
  }
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    visited[[i, j]]
  ) {
    return false;
  }

  if (board[i][j] === word[curr] && !visited[[i, j]]) {
    visited[[i, j]] = true;
    let res =
      find(board, i, j + 1, word, curr + 1, visited) ||
      find(board, i, j - 1, word, curr + 1, visited) ||
      find(board, i + 1, j, word, curr + 1, visited) ||
      find(board, i - 1, j, word, curr + 1, visited);
    delete visited[[i, j]];
    return res;
  } else {
    return false;
  }
}
