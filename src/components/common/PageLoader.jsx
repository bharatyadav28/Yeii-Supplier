import React from "react";
import LoadingSpinner from "./LoadingSpinner";

function PageLoader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LoadingSpinner className="w-[5rem] h-[5rem] text-[var(--main-pink)]  " />
    </div>
  );
}

export default PageLoader;
