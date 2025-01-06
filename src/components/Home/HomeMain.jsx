"use client";

import { noItemsIcon } from "@/lib/svg_icons";
import MainContent from "../common/MainContent";
import NoItems from "../common/NoItems";
import OrdersCallender from "./OrdersCallender";
import orderData from "@/lib/dummyData/orderPageData.json";
import { DarkButton } from "../common/CustomButtons";
import { useRouter } from "next/navigation";
import OrdersList from "./OrdersList";
import { useTranslations } from "next-intl";

const HomeMain = ({ ordersData }) => {
  const router = useRouter();
  const t = useTranslations("homepage");

  const orders = [...ordersData[0].data.items, ...ordersData[1].data.items];
  const newOrders = orders.filter((order) => order.orderStatus === "pending");
  const acceptedOrders = orders.filter(
    (order) => order.orderStatus !== "pending"
  );

  console.log("Orders", orders);

  return (
    <div className="relative flex gap-6  items-stretch overflow-y-auto flex-grow h-full ">
      <MainContent
        contentTitle={t("order_request")}
        count={newOrders.length}
        className="pb-0 !mt-0 overflow-y-hidden"
      >
        {newOrders.length === 0 ? (
          <NoItems
            icon={noItemsIcon}
            heading={t("no_item_heading")}
            subHeading={t("no_item_subHeading")}
          >
            <DarkButton
              onClick={() => router.push("/store")}
              className="w-2/5 mt-4 text-md"
            >
              {t("go_to_store")}
            </DarkButton>
          </NoItems>
        ) : (
          <OrdersList orders={newOrders} />
        )}
      </MainContent>
      <OrdersCallender orders={acceptedOrders} />
    </div>
  );
};

export default HomeMain;
