import { TPlayer } from "./types";

export const VIEW_WIDTH = 12;
export const VIEW_HEIGHT = 20;

export const createStage = (): number[][] => {
  return Array.from(Array(VIEW_HEIGHT), () => {
    return new Array(VIEW_WIDTH).fill(0);
  });
};

export const checkCollision = (
  stage: number[][],
  player: TPlayer,
  moveX: number,
  moveY: number
): boolean => {
  if (player.figure) {
    for (let y = 0; y < player.figure.length; y++) {
      for (let x = 0; x < player.figure[y].length; x++) {
        if (player.figure[y][x] !== 0) {
          let locX = x + player.pos.x + moveX;
          let locY = y + player.pos.y + moveY;
          if (
            locX < 0 ||
            locX >= stage[0].length ||
            locY >= stage.length ||
            stage[locY][locX] === 2
          ) {
            return false;
          }
        }
      }
    }
  }

  return true;
};
