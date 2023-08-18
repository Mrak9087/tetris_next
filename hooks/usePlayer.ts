import { VIEW_WIDTH, checkCollision } from "@/helpers/helpers";
import { getRandomTetromino } from "@/helpers/tetromino";
import { TPlayer } from "@/helpers/types";
import { useState } from "react";

export const usePlayer = () => {
    const [player, setPlayer] = useState<TPlayer>({
      pos: { x: Math.floor(VIEW_WIDTH / 2 - 1), y: 0 },
      figure: null,
      nextFigure: getRandomTetromino(),
      isCollision: false,
    });
  
    const updatePlayerPos = (x:number, y:number, collision:boolean) => {
      setPlayer((prev) => ({
        ...prev,
        pos: {
          x: prev.pos.x + x,
          y: prev.pos.y + y,
        },
        isCollision: collision,
      }));
    };
  
    const resetPlayer = () => {
      setPlayer((prev) => {
        return {
          pos: { x: Math.floor(VIEW_WIDTH / 2 - 1), y: 0 },
          figure: prev.nextFigure,
          nextFigure:getRandomTetromino(),
          isCollision: false,
        }
      });
    };
  
    const setCollision = () => {
      setPlayer((prev) => ({
        ...prev,
        isCollision: true,
      }));
    }
  
    const rotate = (matrix:number[][]) => {
      if(!matrix) return; 
      const rotatedFigure = [];
      let rows = matrix.length;
      let cols = matrix[0].length;
  
      for (let y = 0; y < cols; y++) {
        const newRow = [];
        for (let x = rows - 1, z = 0; x >= 0; x--, z++) {
          newRow[z] = matrix[x][y];
        }
        rotatedFigure[y] = newRow;
      }
  
      return rotatedFigure;
    };
  
    const rotatePlayer = (stage:number[][]) => {
      const copyPlayer = JSON.parse(JSON.stringify(player));
      copyPlayer.figure = rotate(copyPlayer.figure);
      if (!checkCollision(stage, copyPlayer, 0, 0)) {
        let moveX = (copyPlayer.pos.x + copyPlayer.figure[0].length) - stage[0].length
        copyPlayer.pos.x -= moveX; 
      }
      if  (checkCollision(stage, copyPlayer, 0, 0)){
        setPlayer(copyPlayer);
      }
    };
  
    return { player, updatePlayerPos, resetPlayer, rotatePlayer, setCollision };
  };