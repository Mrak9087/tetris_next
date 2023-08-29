import { StaticImageData } from "next/image";

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

export type TImage = {
  id: number;
  src: StaticImageData;
  alt: string;
  caption: string;
};
