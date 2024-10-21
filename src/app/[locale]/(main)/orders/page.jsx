import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import OrdersList from "@/components/orders/OrdersList";
import orderData from "@/lib/dummyData/orderPageData.json";
import { unstable_setRequestLocale } from "next-intl/server";

const StorePage = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const orders = orderData.orders;
  return (
    <DashboardPage>
      <PageHeading pageName="orders" />
      <OrdersList data={orders} />
    </DashboardPage>
  );
};

export default StorePage;
