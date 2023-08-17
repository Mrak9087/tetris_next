export const Tetrominos = {
  I: [[1], [1], [1], [1]],
  J: [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
  L: [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  T: [
    [1, 1, 1],
    [0, 1, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
};

type tetroKey = keyof typeof Tetrominos;

export const getRandomTetromino = (): number[][] => {
  const strTetrominos = "IJLTSOZ";
  const idx = Math.floor(Math.random() * strTetrominos.length);
  const tetrominoLetter: tetroKey = strTetrominos[idx] as tetroKey;
  return Tetrominos[tetrominoLetter];
};
