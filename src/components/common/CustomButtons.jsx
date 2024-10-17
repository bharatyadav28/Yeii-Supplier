"use client";

import { ChevronLeft as BackIcon } from "lucide-react";
import { Button } from "../ui/button";

export const CustomButton = ({ children, className, onClick, isSubmit }) => {
  let classes = " w-[10rem] rounded-xl py-6  hover:opacity-90 transition-all";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <Button
      className={classes}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {children}
    </Button>
  );
};

export const DarkButton = ({ children, className, onClick, isSubmit }) => {
  let classes = "dark-btn";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <CustomButton className={classes} onClick={onClick} isSubmit={isSubmit}>
      {children}
    </CustomButton>
  );
};

export const LightButton = ({ children, className, onClick, isSubmit }) => {
  let classes = "light-btn";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <CustomButton className={classes} onClick={onClick} isSubmit={isSubmit}>
      {children}
    </CustomButton>
  );
};

export const BackwardButton = (props) => {
  const { onClick, className } = props;
  let classes = "m-0 p-3  bg-[var(--light)] text-black rounded-full";
  if (className) {
    classes += " " + className;
  }
  return (
    <button onClick={onClick} className={classes}>
      <BackIcon size={15} color="black" background="white" />
    </button>
  );
};
