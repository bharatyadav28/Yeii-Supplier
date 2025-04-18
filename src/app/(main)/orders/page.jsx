import React, { Suspense } from "react";
import PageHeading from "@/components/common/PageHeading";
import DashboardPage from "@/components/common/DashboardPage";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useTranslations } from "next-intl";
import OrdersList from "@/components/orders/OrdersList";
import { getOrders } from "@/lib/fetchData";

const FetchOrdersData = async ({ search, sortBy, filter }) => {
  let query = "?";
  if (search) query += `query=${search}&`;

  if (sortBy) query += `filter=${sortBy}&`;

  if (filter) query += `sortBy=${filter}`;

  const ordersData = await getOrders(query);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <OrdersList ordersData={ordersData} />
    </Suspense>
  );
};

const OrdersPage = ({ searchParams }) => {
  const t = useTranslations("orderDetails");

  const search = searchParams?.search || "";
  const sortBy = searchParams?.sortBy || "";
  const filter = searchParams?.filter || "";
  console.log("Search:", search);

  return (
    <DashboardPage>
      <PageHeading pageName={t("Orders")} />
      {/* <OrdersList /> */}
      <FetchOrdersData search={search} sortBy={sortBy} filter={filter} />
      {/* </Suspense> */}
    </DashboardPage>
  );
};

export default OrdersPage;
