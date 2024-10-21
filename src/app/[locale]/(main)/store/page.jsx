"use client";
import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import storeData from "@/lib/dummyData/storeData.json";
import List from "@/components/store/List";
import { unstable_setRequestLocale } from "next-intl/server";

const StorePage = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const isEmpty = storeData.products?.length === 0;
  return (
    <DashboardPage>
      <PageHeading pageName="store" />

      <List products={storeData.products} services={storeData.services} />
    </DashboardPage>
  );
};

export default StorePage;
