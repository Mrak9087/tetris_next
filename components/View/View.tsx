import clsx from "clsx";
import React from "react";
import Cell from "../Cell";

interface IView {
  stage: number[][];
}

export const View = ({ stage }: IView) => {
  return (
    <div
      className={clsx(
        "grid border-2 border-gray-500  gap-px w-full max-w-[25vw]",
        `grid-rows-20 grid-cols-12`
      )}
    >
      {stage.map((row, ridx) => {
        return row.map((cell, idx) => <Cell key={ridx + idx} type={cell} />);
      })}
    </div>
  );
};
