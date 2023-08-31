"use client";
import { usePlayer } from "@/hooks/usePlayer";
import TetrisWrapper from "../TetrisWrapper";
import View from "../View";
import { useTetris } from "@/hooks/useTetris";
import { checkCollision, createStage } from "@/helpers/helpers";
import { useState } from "react";
import { useGameInfo } from "@/hooks/useGameInfo";
import Info from "../Info";
import { useInterval } from "@/hooks/useInterval";
import ButtonStart from "../ButtonStart";

const Tetris = () => {
  const [dropTime, setDropTime] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const { player, updatePlayerPos, resetPlayer, rotatePlayer, setCollision } =
    usePlayer();
  const { stage, setStage, deletedRow } = useTetris(player, resetPlayer);
  const { score, setScore, rows, setRows, level, setLevel } =
    useGameInfo(deletedRow);

  const startGame = () => {
    setStage(createStage());
    setScore(0);
    setLevel(0);
    setRows(0);
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
  };

  const movePlayerX = (dir: number) => {
    if (checkCollision(stage, player, dir, 0)) {
      updatePlayerPos(dir, 0, false);
    }
  };

  const movePlayerY = (dir: number) => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (checkCollision(stage, player, 0, dir)) {
      updatePlayerPos(0, dir, false);
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      setCollision();
    }
  };

  const handlerKeyDown = (e: React.KeyboardEvent) => {
    if (!gameOver) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        movePlayerX(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        movePlayerX(1);
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        movePlayerY(1);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        rotatePlayer(stage);
      }
    }
  };

  useInterval(() => {
    movePlayerY(1);
  }, dropTime);

  return (
    <div
      className="w-full min-h-screen bg-black"
      tabIndex={0}
      onKeyDown={handlerKeyDown}
    >
      <TetrisWrapper>
        <View stage={stage} />
        <aside className="flex flex-col gap-y-5 w-[calc(105vw/10)] min-w-[82px] overflow-hidden">
          <Info
            level={level}
            score={score}
            gameOver={gameOver}
            nextFigure={player.nextFigure}
          />

          <ButtonStart callback={startGame} />
        </aside>
      </TetrisWrapper>
      <div className="flex sm:hidden w-full justify-center items-center min-h-screen text-white text-base font-bold text-center">
        Данный размер экрана не поддерживается
      </div>
    </div>
  );
};

export default Tetris;
