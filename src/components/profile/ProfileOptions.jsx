"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { useDispatch } from "react-redux";

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
import { useRouter } from "next/navigation";

import DeleteDialog from "../common/DeleteDialog";
import OptionCard from "./OptionCard";
import { userLogout } from "@/lib/serverActions";
import { addDetails, clearDetails } from "@/lib/store/feature/UnauthUser";

const ProfileOptions = ({ user }) => {
  const t = useTranslations("profilePage");
  const router = useRouter();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteDialog = async (selection = "cancel") => {
    if (selection === "confirm") {
      await userLogout();
      dispatch(clearDetails());
      router.push("/login");
    }
    setOpenDeleteDialog((prev) => !prev);
  };

  useEffect(() => {
    if (user) dispatch(addDetails({ email: user?.email }));
  }, [user]);

  const options = [
    {
      id: 1,
      icon: profileIcon,
      title: t("manageBusinessProfile"),
      route: "/manage_profile",
    },
    {
      id: 2,
      icon: transactionIcon,
      title: t("myTransaction"),
      route: "/transaction",
    },
    {
      id: 3,
      icon: couponIcon,
      title: t("myCoupon"),
      route: "/coupon",
    },
    {
      id: 4,
      icon: settingIcon,
      title: t("settings"),
      route: "/settings",
    },
    {
      id: 5,
      icon: policyIcon,
      title: t("settlementPolicy"),
      route: "/settlement",
    },
    {
      id: 6,
      icon: termsIcon,
      title: t("termsAndConditions"),
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
            <div className="text-sm font-semibold">{t("logout")}</div>
          </div>
          <ChevronRight size={20} color="var(--main-gray)" />
        </button>
      </div>

      <DeleteDialog
        openDialog={openDeleteDialog}
        handleOpenDialog={handleDeleteDialog}
        title={t("logout")}
        description={t("logoutDescription")}
        onCancel={handleDeleteDialog}
        onConfirm={() => handleDeleteDialog("confirm")}
        Icon={LogOut}
        t={t}
      />
    </>
  );
};

export default ProfileOptions;
