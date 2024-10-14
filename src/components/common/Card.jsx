import React from "react";

function Card({ children, className }) {
  let classes = "rounded-xl p-4 h-[8rem] w-[20rem]";
  if (className) {
    classes = classes + " " + className;
  }

  return <div className={classes}>{children}</div>;
}

export default Card;
