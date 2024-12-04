import { useTranslations } from "next-intl";

import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import storeData from "@/lib/dummyData/storeData.json";
import List from "@/components/store/List";
import { getProducts } from "@/lib/fetchData";
import { Suspense } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";

export const GetProducts = async ({ query }) => {
  const response = await getProducts(query);
  const products = response.data.products;

  console.log("Query: ", query);

  return <List products={products} services={storeData.services} />;
};

const StorePage = ({ searchParams }) => {
  const t = useTranslations("storePage");

  // getProducts().then((response) => {
  //   console.log(response);
  //   products = response.data.products;
  // });
  // const response = await getProducts();
  // products = response.data.products;

  const query = searchParams?.query || "";

  const isEmpty = storeData.products?.length === 0;

  return (
    <DashboardPage>
      <PageHeading pageName={t("heading")} />

      <Suspense fallback={<LoadingSpinner />}>
        <GetProducts query={query} />
      </Suspense>

      {/* <List products={products} services={storeData.services} /> */}
    </DashboardPage>
  );
};

export default StorePage;
