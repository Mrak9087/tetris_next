import clsx from "clsx";
import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full h-[80vh] justify-center items-center m-2">
      <div
        className={clsx(
          "inline-block w-20 h-20 after:content-[' '] after:block after:w-16 after:h-16 after:m-2 after:border-8",
          "after:rounded-full after:border-t-blue-600 after:border-r-transparent after:border-b-blue-600 after:border-l-transparent after:animate-ldsDualRing"
        )}
      />
    </div>
  );
};

export default Loading;
