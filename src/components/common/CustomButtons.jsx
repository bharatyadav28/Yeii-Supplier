"use client";

import { Button } from "../ui/button";

export const CustomButton = ({ children, className, onClick }) => {
  let classes = " w-[10rem] rounded-xl py-6  hover:opacity-90 transition-all";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <Button className={classes} onClick={onClick}>
      {children}
    </Button>
  );
};

export const DarkButton = ({ children, className, onClick }) => {
  let classes = "dark-btn";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <CustomButton className={classes} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export const LightButton = ({ children, className, onClick }) => {
  let classes = "light-btn";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <CustomButton className={classes} onClick={onClick}>
      {children}
    </CustomButton>
  );
};
