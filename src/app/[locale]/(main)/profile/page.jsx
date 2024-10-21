"use client";

import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import LanguageSwitcher from "@/components/profile/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const StorePage = ({ params: { locale } }) => {
  console.log("porfile", { locale });
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");

  return (
    <DashboardPage>
      <PageHeading pageName="profile" />
      <LanguageSwitcher />
    </DashboardPage>
  );
};

export default StorePage;
