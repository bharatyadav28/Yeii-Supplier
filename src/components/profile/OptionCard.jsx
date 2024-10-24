"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Switch } from "../ui/switch";
import DeleteDialog from "../common/DeleteDialog";

function OptionCard({ option, isSettings, extraInfo, isDelete }) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isNotificationOption = option.title === "Notifications";

  const handleDeleteDialog = () => {
    setOpenDeleteDialog((prev) => !prev);
  };

  const handleClick = () => {
    switch (option.title) {
      case "Delete account":
        handleDeleteDialog();
        break;
      default:
        console.log("heelo");
        router.push(`${pathname}${option.route}`);
    }
  };

  return (
    <>
      {!isNotificationOption && (
        <button
          className={`flex ${
            isSettings ? "py-[1rem]" : "py-[0.6rem]"
          }  justify-between items-center border-b-[1px]`}
          onClick={handleClick}
        >
          <div className="flex justify-center items-center gap-4">
            <div className="w-[42px] h-[42px] bg-[var(--light-pink)] rounded-full flex justify-center items-center ">
              {option.icon}
            </div>
            <div className="text-sm font-semibold">{option.title}</div>
          </div>

          <div className=" flex items-center gap-2 text-sm">
            {extraInfo && (
              <div className="text-sm text-[var(--main-gray)]">{extraInfo}</div>
            )}
            {/* {isNotificationOption && (
            <Switch className="data-[state=checked]:bg-[var(--main-pink)]  h-7" />
          )} */}
            <ChevronRight
              size={20}
              color="var(--main-gray)"
              className={` ${isNotificationOption && "hidden"} `}
            />
          </div>
        </button>
      )}

      {isNotificationOption && (
        <div
          className={`flex ${
            isSettings ? "py-[1rem]" : "py-[0.6rem]"
          }  justify-between items-center border-b-[1px]`}
        >
          <div className="flex justify-center items-center gap-4">
            <div className="w-[42px] h-[42px] bg-[var(--light-pink)] rounded-full flex justify-center items-center ">
              {option.icon}
            </div>
            <div className="text-sm font-semibold">{option.title}</div>
          </div>

          <div className=" flex items-center gap-2 text-sm">
            {extraInfo && (
              <div className="text-sm text-[var(--main-gray)]">{extraInfo}</div>
            )}
            {
              <Switch className="data-[state=checked]:bg-[var(--main-pink)]  h-7" />
            }
          </div>
        </div>
      )}

      <DeleteDialog
        openDialog={openDeleteDialog}
        handleOpenDialog={handleDeleteDialog}
        title="Delete account"
        description="Are you sure you want to Delete your account?"
        onCancel={handleDeleteDialog}
        onConfirm={handleDeleteDialog}
      />
    </>
  );
}

export default OptionCard;
