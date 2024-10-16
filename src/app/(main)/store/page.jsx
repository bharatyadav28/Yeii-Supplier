import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import storeData from "@/lib/dummyData/storeData.json";
import List from "@/components/store/List";

const StorePage = () => {
  const isEmpty = storeData.products?.length === 0;
  return (
    <DashboardPage>
      <PageHeading pageName="Store" />

      <List products={storeData.products} services={storeData.services} />
    </DashboardPage>
  );
};

export default StorePage;
