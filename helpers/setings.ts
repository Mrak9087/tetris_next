import { TImage, TLink } from "./types";

import ArrowUp from "@/public/images/arrowUp.png";
import ArrowRight from "@/public/images/arrowRight.png";
import ArrowDown from "@/public/images/arrowDown.png";
import ArrowLeft from "@/public/images/arrowLeft.png";

export const HeaderLinks: TLink[] = [
  {
    id: 1,
    href: "/",
    caption: "Тетрис",
  },
  {
    id: 2,
    href: "/control",
    caption: "Управление",
  },
];

export const ControlsImg: TImage[] = [
  {
    id: 1,
    src: ArrowUp,
    alt: "Стрелка вверх",
    caption: "Поворот фигуры",
  },
  {
    id: 2,
    src: ArrowRight,
    alt: "Стрелка вправо",
    caption: "Движение в право",
  },
  {
    id: 3,
    src: ArrowDown,
    alt: "Стрелка вниз",
    caption: "Движение вниз",
  },
  {
    id: 4,
    src: ArrowLeft,
    alt: "Стрелка влево",
    caption: "Движение влево",
  },
];
