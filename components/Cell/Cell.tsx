import clsx from "clsx";
import React from "react";

interface ICell {
  type: number;
}

export const Cell = React.memo(({ type }:ICell) => {
  return (
    <div
      className={clsx("w-auto border", type ? "bg-gray-500" : "bg-black")}
    ></div>
  );
});
