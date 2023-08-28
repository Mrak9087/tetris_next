export type TPlayer = {
  pos: { x: number; y: number };
  figure: number[][] | null;
  nextFigure: number[][] | null;
  isCollision: boolean;
};

export type TLink = {
  id: number;
  href: string;
  caption: string;
};
