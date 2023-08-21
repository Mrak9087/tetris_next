import { infoStage } from "@/helpers/helpers";
import React, {useState, useEffect} from "react";
import Cell from "../Cell";

interface IInfoStage {
  nextFigure: number[][] | null;
}

const InfoStage = ({ nextFigure }: IInfoStage) => {
  const [figure, setFigure] = useState(infoStage());

  useEffect(() => {
    setFigure(infoStage());
    return () => {
      nextFigure = null;
    };
  }, [nextFigure]);
  
  return (
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
  );
};

export default InfoStage;
