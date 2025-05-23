"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import MainComp from "@/components/manage_profile/MainComp";

const ManageProfileWrapper = ({ user }) => {
  const t = useTranslations("profilePage");
  const [isEdit, setIsEdit] = useState(true);

  return (
    <AuthPage
      showHeader={true}
      heading={isEdit ? t("manageBusinessProfile") : t("editBusinessProfile")}
      route="/profile"
      className=""
    >
      <MainComp
        isEdit={isEdit}
        setIsEdit={() => setIsEdit((prev) => !prev)}
        user={user}
      />
    </AuthPage>
  );
};

export default ManageProfileWrapper;
