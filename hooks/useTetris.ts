import { useEffect, useState } from "react";
import { beforeResetPlayer, createStage, newStage } from "../helpers/helpers";
import { TPlayer } from "@/helpers/types";

export const useTetris = (player:TPlayer | null, resetPlayer:()=>void) => {
  const [stage, setStage] = useState(createStage());
  const [deletedRow, setDeletedRow] = useState(0);

  useEffect(() => {
    let {copyStage, deletedRowCount} = newStage(stage, player);
    
    if(player?.isCollision) {
      copyStage =  beforeResetPlayer(copyStage);
      resetPlayer();
    }

    setDeletedRow(deletedRowCount)
    setStage(copyStage);

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
