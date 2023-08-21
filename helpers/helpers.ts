import { TPlayer } from "./types";

export const VIEW_WIDTH = 12;
export const VIEW_HEIGHT = 20;

export const infoStage = (): number[][] => {
  return Array.from(Array(4), () => {
    return new Array(4).fill(0);
  });
};

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

export const newStage = (stage: number[][], player: TPlayer | null) => {
  let copyStage = createStage();
  let deletedRowCount = 0;

  for (let y = 0; y < stage.length; y++) {
    for (let x = 0; x < stage[0].length; x++) {
      if (stage[y][x] === 2) {
        copyStage[y][x] = 2;
      }
    }
  }

  player?.figure?.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      if (cell) {
        copyStage[rIdx + player.pos.y][cIdx + player.pos.x] = cell;
      }
    });
  });

  if (player?.isCollision) {
    player.figure?.forEach((row, rIdx) => {
      row.forEach((cell, cIdx) => {
        if (cell) {
          copyStage[rIdx + player.pos.y][cIdx + player.pos.x] = 2;
        }
      });
    });

    copyStage = copyStage.reduce((acc: number[][], row) => {
      if (Math.min(...row) === 2) {
        acc.unshift(new Array(copyStage[0].length).fill(0));
        deletedRowCount++;
        return acc;
      }
      acc.push(row);
      return acc;
    }, []);
  }
  return { copyStage, deletedRowCount };
};

export const beforeResetPlayer = (stage: number[][]) => {
  let copyStage = createStage();
  let isEmpty = false;
  for (let y = stage.length-1; y >= 0; y--) {
    for (let x = 0; x < stage[y].length; x++) {
      if(isEmpty) {
        copyStage[y][x] = 0;
        continue;
      } 
      copyStage[y][x] = stage[y][x];
    }
    if (y > 0 && !copyStage[y].includes(1) && !copyStage[y].includes(2)) {
      isEmpty = true;
    }
  }
  return copyStage 
}
