import { useTranslations } from "next-intl";

import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import OrdersList from "@/components/orders/OrdersList";
import orderData from "@/lib/dummyData/orderPageData.json";

const StorePage = () => {
  const orders = orderData.orders;
  const t = useTranslations("orderDetails");

  return (
    <DashboardPage>
      <PageHeading pageName={t("Orders")} />
      <OrdersList data={orders} />
    </DashboardPage>
  );
};

export default StorePage;
