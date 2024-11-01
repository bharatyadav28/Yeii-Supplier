import React from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import {
  notificationIcon,
  businessAvailabilityIcon,
  languageIcon,
  resetPasswordIcon,
  deleteAccountIcon,
} from "@/lib/svg_icons";
import OptionCard from "@/components/profile/OptionCard";

const SettingsPage = () => {
  const t = useTranslations("profilePage");

  const settingsMenu = [
    {
      id: "1",
      icon: notificationIcon,
      title: t("notifications"),
      route: "#",
    },
    {
      id: "2",
      icon: businessAvailabilityIcon,
      title: t("business_availability"),
      route: "/availability",
    },
    {
      id: "3",
      icon: languageIcon,
      title: t("language"),
      route: "/language",
    },
    {
      id: "4",
      icon: resetPasswordIcon,
      title: t("reset_Password"),
      route: "/reset-password",
    },

    {
      id: "5",
      icon: deleteAccountIcon,
      title: t("delete_account"),
      route: "#",
    },
  ];

  const getExtraInfo = (option) => {
    let info = "";
    switch (option.title) {
      case t("business_availability"):
        info = t("custom_days");
        break;

      // case t("language"):
      //   fetchLanguage();
      //   info = "English";
      //   break;
      default:
        info = "";
    }
    return info;
  };
  return (
    <AuthPage showHeader={true} heading={t("settings")} route="/profile">
      <div className="flex flex-col gap-3 px-5 mt-10 overflow-y-auto bg-[#fff] w-full !h-max  mb-auto rounded-xl">
        {settingsMenu.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            isSettings={true}
            extraInfo={getExtraInfo(option)}
            isLanguage={option.title === t("language")}
          />
        ))}
      </div>
    </AuthPage>
  );
};

export default SettingsPage;
