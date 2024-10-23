import React from "react";

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
  const settingsMenu = [
    {
      id: "1",
      icon: notificationIcon,
      title: "Notifications",
      route: "#",
    },
    {
      id: "2",
      icon: businessAvailabilityIcon,
      title: "Business Availability",
      route: "/availability",
    },
    {
      id: "3",
      icon: languageIcon,
      title: "Language",
      route: "/language",
    },
    {
      id: "4",
      icon: resetPasswordIcon,
      title: "Reset password",
      route: "/reset-password",
    },

    {
      id: "5",
      icon: deleteAccountIcon,
      title: "Delete account",
      route: "#",
    },
  ];

  const getExtraInfo = (option) => {
    let info = "";
    switch (option.title) {
      case "Business Availability":
        info = "Custom days";
        break;

      case "Language":
        info = "English";
        break;
      default:
        info = "";
    }
    return info;
  };
  return (
    <AuthPage showHeader={true} heading="Settings" route="/profile">
      <div className="flex flex-col gap-3 px-5 mt-10 overflow-y-auto bg-[#fff] w-full !h-max  mb-auto rounded-xl">
        {settingsMenu.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            isSettings={true}
            extraInfo={getExtraInfo(option)}
          />
        ))}
      </div>
    </AuthPage>
  );
};

export default SettingsPage;
