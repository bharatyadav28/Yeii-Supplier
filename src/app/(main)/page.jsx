import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import HomeMain from "@/components/Home/HomeMain";
import { getAllOrders } from "@/lib/fetchData";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import PageLoader from "@/components/common/PageLoader";

const HomeData = async () => {
  const ordersData = await getAllOrders();

  return (
    <Suspense fallback={<PageLoader />}>
      <HomeMain ordersData={ordersData || []} />
    </Suspense>
  );
};

const Home = () => {
  const t = useTranslations("homepage");

  return (
    <DashboardPage>
      <PageHeading pageName={t("heading")} avalability={true} />
      <HomeData />
    </DashboardPage>
  );
};

export default Home;
