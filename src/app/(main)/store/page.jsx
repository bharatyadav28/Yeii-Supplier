import { useTranslations } from "next-intl";

import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import List from "@/components/store/List";
import { getProducts, getServices } from "@/lib/fetchData";
import { Suspense } from "react";
import PageLoader from "@/components/common/PageLoader";

// Fetch the products and services
export const GetItems = async ({ query }) => {
  const [productResponse, serviceResponse] = await Promise.all([
    getProducts(query),
    getServices(query),
  ]);

  const products = productResponse.data?.products || [];
  const services = serviceResponse.data?.services || [];
  return <List products={products} services={services} />;
};

const StorePage = ({ searchParams }) => {
  const t = useTranslations("storePage");
  // Search param
  const query = searchParams?.query || "";

  return (
    <DashboardPage>
      <PageHeading pageName={t("heading")} />

      <Suspense fallback={<PageLoader />}>
        <GetItems query={query} />
      </Suspense>
    </DashboardPage>
  );
};

export default StorePage;
