import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { BackwardButton } from "./CustomButtons";
function CustomDialog({ open, handleOpen, className, title, children }) {
  let classes =
    "max-w-full w-[10rem] min-h-[10rem] !bg-[var(--light-gray)] !rounded-3xl";
  if (className) {
    classes += " " + className;
  }
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className={classes}>
        <div className="flex flex-col">
          <div className="relative flex justify-center">
            <div className="absolute left-0 top-0 ">
              <BackwardButton onClick={handleOpen} />
            </div>
            <div className=" mt-2 font-semibold "> {title}</div>
          </div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
