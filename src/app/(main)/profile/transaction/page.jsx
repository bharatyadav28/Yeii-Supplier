import React from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import MainContent from "@/components/common/MainContent";
import MainComp from "@/components/transaction/MainComp";

const TransactionPage = () => {
  const t = useTranslations("profilePage");

  return (
    <AuthPage showHeader={true} heading={t("myTransaction")} route="/profile">
      <MainContent className="pb-0 !h-0">
        <MainComp />
      </MainContent>
    </AuthPage>
  );
};

export default TransactionPage;
