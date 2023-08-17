import { useEffect, useState } from "react";
import { createStage, newStage } from "../helpers/helpers";
import { TPlayer } from "@/helpers/types";

export const useTetris = (player:TPlayer | null, resetPlayer:()=>void) => {
  const [stage, setStage] = useState(createStage());
  const [deletedRow, setDeletedRow] = useState(0);

  useEffect(() => {
    const {copyStage, deletedRowCount} = newStage(stage, player);
    
    setDeletedRow(deletedRowCount)
    setStage(copyStage);

    if(player?.isCollision) {
      resetPlayer();
    }
    return () => {
      player = null;
    }
  }, [player]);

  return {
    stage,
    setStage,
    deletedRow
  };
};
