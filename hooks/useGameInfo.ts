import { useCallback, useEffect, useState } from "react";

const linePoints = [40, 100, 300, 1200];

export const useGameInfo = (deletedRow: number) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [rows, setRows] = useState(0);

  const calcScore = useCallback(() => {
    if (deletedRow > 0) {
      setScore((prev) => prev + linePoints[deletedRow - 1] * (level + 1));
      setRows((prev) => prev + deletedRow);
    }
  }, [level, linePoints, deletedRow]);

  useEffect(() => {
    calcScore();
  }, [calcScore, deletedRow, score]);

  return { score, setScore, rows, setRows, level, setLevel };
};
