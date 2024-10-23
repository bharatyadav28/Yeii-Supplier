"use client";
import { useState } from "react";
import {
  couponIcon,
  logoutIcon,
  policyIcon,
  profileIcon,
  settingIcon,
  termsIcon,
  transactionIcon,
} from "@/lib/svg_icons";
import { ChevronRight, LogOut } from "lucide-react";

import DeleteDialog from "../common/DeleteDialog";
import OptionCard from "./OptionCard";

const ProfileOptions = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleDeleteDialog = () => {
    setOpenDeleteDialog((prev) => !prev);
  };

  const options = [
    {
      id: 1,
      icon: profileIcon,
      title: "Manage Business Profile",
      route: "/manage_profile",
    },
    {
      id: 2,
      icon: transactionIcon,
      title: "My Transaction",
      route: "/transaction",
    },
    {
      id: 3,
      icon: couponIcon,
      title: "My coupon",
      route: "/coupon",
    },
    {
      id: 4,
      icon: settingIcon,
      title: "Settings",
      route: "/settings",
    },
    {
      id: 5,
      icon: policyIcon,
      title: "Settlement Policy",
      route: "/settlement",
    },
    {
      id: 6,
      icon: termsIcon,
      title: "Terms and Conditions",
      route: "/terms_and_conditions",
    },
  ];
  return (
    <>
      <div className="flex-grow flex flex-col gap-3 px-5 mt-4  overflow-y-auto ">
        {options.map((option) => (
          <OptionCard key={option.id} option={option} />
        ))}
        <button
          onClick={handleDeleteDialog}
          className="flex pt-[0.8rem] justify-between items-center "
        >
          <div className="flex justify-center items-center gap-4">
            <div className="w-[42px] h-[42px] bg-black/10 rounded-full flex justify-center items-center ">
              {logoutIcon}
            </div>
            <div className="text-sm font-semibold">Logout</div>
          </div>
          <ChevronRight size={20} color="var(--main-gray)" />
        </button>
      </div>

      <DeleteDialog
        openDialog={openDeleteDialog}
        handleOpenDialog={handleDeleteDialog}
        title="Log out"
        description="Are you sure you want to logout ?"
        onCancel={handleDeleteDialog}
        onConfirm={handleDeleteDialog}
        Icon={LogOut}
      />
    </>
  );
};

export default ProfileOptions;
