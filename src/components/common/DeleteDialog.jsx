import React from "react";
import { Trash as DeleteIcon } from "lucide-react";

import CustomDialog from "./CustomDialog";
import { CustomButton, DarkButton, LightButton } from "./CustomButtons";

function DeleteDialog({
  openDialog,
  handleOpenDialog,
  title,
  description,
  onCancel,
  onConfirm,
}) {
  return (
    <CustomDialog
      open={openDialog}
      handleOpen={handleOpenDialog}
      className="w-max p-0 overflow-visible "
    >
      <div className="relative z-[1000]">
        <div className="w-[115px] h-[70px]   border-black/65 border-[8px] rounded-b-full absolute  left-1/2 -translate-x-1/2 top-[-0.62rem]"></div>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[100px] h-[100px] border-[8px] flex justify-center items-center bg-[#1B1B1B] rounded-full">
          <DeleteIcon className="text-white" />
        </div>
        <div className="bg-white p-4 pt-20 min-w-[20rem] rounded-3xl flex flex-col justify-center items-center gap-2">
          <div className="text-center font-bold text-2xl">{title} </div>
          <div className="text-center text-[0.9rem]">{description}</div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <LightButton
              className="border !border-[rgba(0, 0, 0, 0.10)] py-6 "
              onClick={onCancel}
            >
              Cancel
            </LightButton>
            <CustomButton className="py-6" onClick={onConfirm}>
              Confirm
            </CustomButton>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
}

export default DeleteDialog;
