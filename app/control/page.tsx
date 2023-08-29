import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { ControlsImg } from "@/helpers/setings";

export const metadata: Metadata = {
  title: "Управление",
};

const page = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen flex justify-center p-4">
      <div className="container flex flex-col gap-2">
        {ControlsImg.map((item) => {
          return (
            <div
              key={item.id}
              className="flex gap-2 text-white items-center text-sm lg:text-xl font-bold"
            >
              <Image src={item.src} alt={item.alt} className="w-10 lg:w-14" />
              <span>{item.caption}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
