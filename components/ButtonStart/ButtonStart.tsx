import React from "react";

interface IButtonStart {
  callback: () => void;
}

function ButtonStart({ callback }: IButtonStart) {
  return (
    <button
      className="outline-none border-2 rounded-lg text-xl font-bold bg-black tracking-widest px-5 py-3 text-gray-400"
      onClick={callback}
    >
      Старт
    </button>
  );
}

export default ButtonStart;
