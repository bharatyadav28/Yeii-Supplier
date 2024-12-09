import { useTranslations } from "next-intl";

import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import storeData from "@/lib/dummyData/storeData.json";
import List from "@/components/store/List";
import { getProducts, getServices } from "@/lib/fetchData";
import { Suspense } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import PageLoader from "@/components/common/PageLoader";

export const GetItems = async ({ query }) => {
  const [productResponse, serviceResponse] = await Promise.all([
    getProducts(query),
    getServices(query),
  ]);

  const products = productResponse.data?.products || [];
  const services = serviceResponse.data?.services || [];

  console.log("Query: ", query);

  return <List products={products} services={services} />;
};

const StorePage = ({ searchParams }) => {
  const t = useTranslations("storePage");

  const query = searchParams?.query || "";

  return (
    <DashboardPage>
      <PageHeading pageName={t("heading")} />

      <Suspense fallback={<PageLoader />}>
        <GetItems query={query} />
      </Suspense>

      {/* <List products={products} services={storeData.services} /> */}
    </DashboardPage>
  );
};

export default StorePage;
