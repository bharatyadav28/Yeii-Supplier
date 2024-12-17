import React, { Suspense } from "react";
import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useTranslations } from "next-intl";
import OrdersList from "@/components/orders/OrdersList";
// const OrdersList = React.lazy(() => import("@/components/orders/OrdersList"));

const OrdersPage = () => {
  const t = useTranslations("orderDetails");

  return (
    <DashboardPage>
      <PageHeading pageName={t("Orders")} />
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      <OrdersList />
      {/* </Suspense> */}
    </DashboardPage>
  );
};

export default OrdersPage;
