import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import OrdersList from "@/components/orders/OrdersList";
import orderData from "@/lib/dummyData/orderPageData.json";

const StorePage = () => {
  const orders = orderData.orders;
  return (
    <DashboardPage>
      <PageHeading pageName="orders" />
      <OrdersList data={orders} />
    </DashboardPage>
  );
};

export default StorePage;
