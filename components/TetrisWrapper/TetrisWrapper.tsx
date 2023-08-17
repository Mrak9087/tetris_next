import React from "react";

interface ITetrisWrapper {
  children: React.ReactNode;
}

export const TetrisWrapper = ({ children }: ITetrisWrapper) => {
  return (
    <div className="container min-w-[768px] max-w-4xl w-full mx-auto flex justify-center items-start gap-4 p-3">
      {children}
    </div>
  );
};
