import clsx from "clsx";
import React from "react";

interface IButtonStart {
  callback: () => void;
}

function ButtonStart({ callback }: IButtonStart) {
  return (
    <div
      className={clsx(
        "outline-none rounded-lg text-xs md:text-sm lg:text-base xl:text-xl font-bold bg-black tracking-widest  text-gray-400 relative block cursor-pointer p-[2px] hover:before:rotate-180 overflow-hidden ",
        'before:content-[" "] before:absolute before:top-[-2px] before:right-[-2px] before:bottom-[-2px] before:left-[-2px] before:z-0 before:pointer-events-none before:bg-gradient-to-tl before:from-sky-500 before:to-violet-400 before:transition-all before:ease-linear before:duration-1000'
      )}
      onClick={callback}
    >
      <div className="bg-black h-full w-full rounded-lg flex items-center justify-center px-5 py-3 relative pointer-events-none">
        Старт
      </div>
    </div>
  );
}

export default ButtonStart;
