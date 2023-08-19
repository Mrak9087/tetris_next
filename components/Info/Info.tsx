import React, { useEffect, useState } from "react";
import Cell from "../Cell";
import { infoStage } from "@/helpers/helpers";

interface IInfo {
  score: number;
  level: number;
  nextFigure: number[][] | null;
  gameOver: boolean;
}

const Info = ({ score, level, nextFigure, gameOver }: IInfo) => {
  const [figure, setFigure] = useState(infoStage());

  useEffect(() => {
    setFigure(infoStage());
    return () => {
      nextFigure = null;
    };
  }, [nextFigure]);

  return (
    <div className="text-gray-400 text-lg font-bold border-2 lg:border-4 rounded-md h-auto border-gray-300 p-1">
      <div className="flex justify-center">
        <div className="grid gap-px grid-rows-4x grid-cols-4x mx-auto">
          {figure.map((row, ridx) => {
            return row.map((cell, idx) => {
              let t = cell;
              if (nextFigure && nextFigure[ridx] && nextFigure[ridx][idx]) {
                t = nextFigure[ridx][idx];
              }
              return <Cell key={ridx + idx} type={t} />;
            });
          })}
        </div>

      </div>
      <div className="flex flex-col border-b-2 border-gray-500 p-1 md:p-2 tracking-wider text-xs md:text-sm lg:text-base xl:text-xl">
        <span>Счет:</span>
        {score}
      </div>
      <div className="flex flex-col p-1 md:p-2 tracking-wider text-xs md:text-sm lg:text-base xl:text-xl">
        <span>Уровень:</span>
        {level}
      </div>
      {gameOver && (
        <div className="text-red-600 border-t-2 border-gray-500 p-2">
          Game Over!!
        </div>
      )}
    </div>
  );
};

export default Info;
