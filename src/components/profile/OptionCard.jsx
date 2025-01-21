"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Switch } from "../ui/switch";
import DeleteDialog from "../common/DeleteDialog";
import { getLanguage } from "@/app/actions/getLanguage";
import { deleteAccount } from "@/lib/serverActions";
import useHttp from "../hooks/use-http";

function OptionCard({ option, isSettings, extraInfo, isDelete, isLanguage }) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [lang, setLang] = useState("en");
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("profilePage");

  const { isLoading: isDeleting, dbConnect } = useHttp();

  const isNotificationOption = option.title === t("notifications");

  const handleDeleteDialog = async (selection = "cancel") => {
    if (selection === "confirm") {
      await dbConnect(deleteAccount.bind(null));
    }
    setOpenDeleteDialog((prev) => !prev);
  };

  const handleClick = () => {
    switch (option.title) {
      case t("delete_account"):
        handleDeleteDialog();
        break;
      default:
        router.push(`${pathname}${option.route}`);
    }
  };

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const language = await getLanguage();
        setLang(language);
      } catch (error) {
        console.error("Failed to fetch language:", error);
      }
    };

    fetchLanguage();
  }, []);

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
            {isLanguage && (
              <div className="text-sm text-[var(--main-gray)]">
                {lang === "en" ? "English" : "Spanish"}
              </div>
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
        title={t("delete_account")}
        description={t("delete_account_desc")}
        onCancel={handleDeleteDialog}
        onConfirm={() => handleDeleteDialog("confirm")}
        t={t}
        isDeleting={isDeleting}
      />
    </>
  );
}

export default OptionCard;
