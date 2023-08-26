import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import ArrowUp from "@/public/images/arrowUp.png";
import ArrowRight from "@/public/images/arrowRight.png";
import ArrowDown from "@/public/images/arrowDown.png";
import ArrowLeft from "@/public/images/arrowLeft.png";

export const metadata: Metadata = {
  title: "Управление",
};

const page = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen flex justify-center p-4">
      <div className="container flex flex-col gap-2">
        <div className="flex gap-2 text-white items-center text-sm lg:text-xl font-bold">
          <Image src={ArrowUp} alt="Arrow Up" className="w-10 lg:w-14"/> 
          <span>Поворот фигуры</span>
        </div>
        <div className="flex gap-2 text-white items-center text-sm lg:text-xl font-bold">
          <Image src={ArrowRight} alt="Arrow Right" className="w-10 lg:w-14"/>
          <span>Движение в право</span>
        </div>
        <div className="flex gap-2 text-white items-center text-sm lg:text-xl font-bold">
          <Image src={ArrowDown} alt="Arrow Down" className="w-10 lg:w-14"/>
          <span>Движение вниз</span>
        </div>
        <div className="flex gap-2 text-white items-center text-sm lg:text-xl font-bold">
          <Image src={ArrowLeft} alt="Arrow Left" className="w-10 lg:w-14"/>
          <span>Движение влево</span>
        </div>
      </div>
    </div>
  );
};

export default page;
