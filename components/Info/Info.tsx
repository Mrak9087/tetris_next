import React from "react";
import CanvasNextFigure from "../CanvasNextFigure";

interface IInfo {
  score: number;
  level: number;
  nextFigure: number[][] | null;
  gameOver: boolean;
}

const Info = ({ score, level, nextFigure, gameOver }: IInfo) => {
  return (
    <div className="text-gray-400 text-lg font-bold border-2 lg:border-4 rounded-md h-auto border-gray-300 p-1">
      <CanvasNextFigure next={nextFigure} />
      <div className="flex flex-col border-b-2 border-gray-500 p-1 md:p-2 tracking-wider text-xs md:text-sm lg:text-base xl:text-xl">
        <span>Счет:</span>
        {score}
      </div>
      <div className="flex flex-col p-1 md:p-2 tracking-wider text-xs md:text-sm lg:text-base xl:text-xl">
        <span>Уровень:</span>
        {level}
      </div>
      {gameOver && (
        <div className="text-red-600 border-t-2 border-gray-500 p-2 text-xs md:text-sm lg:text-base xl:text-xl text-center">
          Конец игры!
        </div>
      )}
    </div>
  );
};

export default Info;
