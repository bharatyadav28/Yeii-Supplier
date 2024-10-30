import React from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import MainComp from "@/components/manage_profile/MainComp";

const page = () => {
  const t = useTranslations("profilePage");
  return (
    <AuthPage
      showHeader={true}
      heading={t("manageBusinessProfile")}
      route="/profile"
    >
      <MainComp />
    </AuthPage>
  );
};

export default page;
