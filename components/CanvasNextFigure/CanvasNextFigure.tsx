import React, { useEffect, useRef } from "react";

interface ICanvasNextFigure {
  next: number[][] | null;
}

const CanvasNextFigure = ({ next }: ICanvasNextFigure) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef) {
      canvasRef.current!.width = canvasRef.current!.height;
    }
  }, []);

  useEffect(() => {
    if (next) {
      if (canvasRef) {
        let ctx = canvasRef.current?.getContext("2d");
        ctx!.fillStyle = "rgb(0, 0, 0)";
        let w = canvasRef.current!.width / 4;
        let h = canvasRef.current!.height / 4;
        ctx!.fillRect(
          0,
          0,
          canvasRef.current!.width,
          canvasRef.current!.height
        );

        for (let y = 0; y < next.length; y++) {
          for (let x = 0; x < next[y].length; x++) {
            if (next[y][x]) {
              ctx!.fillStyle = "rgb(107, 114, 128)";
            } else {
              ctx!.fillStyle = "rgb(0, 0, 0)";
            }
            ctx!.fillRect(x * w, y * h, w, h);
          }
        }
      }
    }
  }, [next]);

  return <canvas ref={canvasRef} className="w-1/2 border bg-black"></canvas>;
};

export default CanvasNextFigure;
