import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { BackwardButton } from "./CustomButtons";
function CustomDialog({
  open,
  handleOpen,
  className,
  title,
  children,
  titleRightContent,
}) {
  let classes =
    "max-w-full w-[10rem] min-h-[10rem] !bg-[var(--light-gray)] !rounded-3xl overflow-y-auto py-4";
  if (className) {
    classes += " " + className;
  }
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogDescription className="hidden"></DialogDescription>
      <DialogContent className={classes}>
        <div className="flex flex-col">
          <div className="relative flex justify-center">
            <div className="absolute left-0 top-0 ">
              <BackwardButton onClick={handleOpen} />
            </div>
            <div className=" mt-2 font-semibold "> {title}</div>
            <div className="absolute right-0 top-2 ">{titleRightContent}</div>
          </div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
