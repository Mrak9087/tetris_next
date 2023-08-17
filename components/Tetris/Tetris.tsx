import { usePlayer } from "@/hooks/usePlayer";
import TetrisWrapper from "../TetrisWrapper";
import View from "../View";
import { useTetris } from "@/hooks/useTetris";
import { checkCollision, createStage } from "@/helpers/helpers";
import { useState } from "react";

const Tetris = () => {
  const [gameOver, setGameOver] = useState(false);

  const { player, updatePlayerPos, resetPlayer, rotatePlayer, setCollision } =
    usePlayer();
  const { stage, setStage, deletedRow } = useTetris(player, resetPlayer);

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const movePlayerX = (dir: number) => {
    if (checkCollision(stage, player, dir, 0)) {
      updatePlayerPos(dir, 0, false);
    }
  };

  const movePlayerY = (dir: number) => {
    if (checkCollision(stage, player, 0, dir)) {
      updatePlayerPos(0, dir, false);
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
      }
      setCollision();
    }
  };

  const handlerKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (!gameOver) {
      if (e.keyCode === 37) {
        movePlayerX(-1);
      }
      if (e.keyCode === 39) {
        movePlayerX(1);
      }
      if (e.keyCode === 40) {
        movePlayerY(1);
      }
      if (e.keyCode === 38) {
        rotatePlayer(stage);
      }
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-black"
      tabIndex={0}
      onKeyDown={handlerKeyDown}
    >
      <TetrisWrapper>
        <View stage={stage} />
      </TetrisWrapper>
    </div>
  );
};

export default Tetris;
