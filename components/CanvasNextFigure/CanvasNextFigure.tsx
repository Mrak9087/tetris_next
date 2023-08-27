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
        console.log('canvas')
        let ctx = canvasRef.current?.getContext('2d');
        let w = canvasRef.current!.width / 4;
        let h = canvasRef.current!.height / 4;
        ctx!.lineWidth=2;
        ctx!.strokeStyle= '#e5e7eb';
        ctx!.fillStyle = 'rgb(0, 0, 0)';
        ctx!.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);

        for (let y = 0; y < next.length; y++) {
            for (let x = 0; x < next[y].length; x++) {
                if (next[y][x]) {
                    ctx!.fillStyle = 'rgb(107, 114, 128)';
                    // ctx!.rect(x * w, y * h, w, h);
                    // ctx!.fill();
                    // ctx!.stroke();
                    
                } else {
                    ctx!.fillStyle = 'rgb(0, 0, 0)';
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
