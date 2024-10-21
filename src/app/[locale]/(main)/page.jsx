"use client";

import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import HomeMain from "@/components/Home/HomeMain";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }) {
  console.log("home", { locale });
  unstable_setRequestLocale(locale);
  return (
    <DashboardPage>
      <PageHeading pageName="home" avalability={true} />
      <HomeMain />
    </DashboardPage>
  );
}
