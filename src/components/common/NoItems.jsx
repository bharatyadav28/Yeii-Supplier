import React from "react";

// UI when when page has no items
function NoItems({ icon, heading, subHeading, children }) {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100%-5rem)]">
      <div>{icon}</div>
      <div className="text-[1.5rem] font-medium">{heading}</div>
      <div className="max-w-[20rem] text-center text-[var(--medium-gray)] text-[0.8rem]">
        {subHeading}
      </div>
      {children}
    </div>
  );
}

export default NoItems;
