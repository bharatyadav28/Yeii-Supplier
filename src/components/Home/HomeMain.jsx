"use client";

import { noItemsIcon } from "@/lib/svg_icons";
import MainContent from "../common/MainContent";
import NoItems from "../common/NoItems";
import OrdersCallender from "./OrdersCallender";
import orderData from "@/lib/dummyData/orderData.json";
import { DarkButton } from "../common/CustomButtons";
import { useRouter } from "next/navigation";
import OrdersList from "./OrdersList";

const HomeMain = () => {
  const title = "Order Request";

  const router = useRouter();

  const { orders } = orderData;

  return (
    <div className="w-full h-full flex items-center gap-5">
      <MainContent contentTitle={title} count={orders.length} className="pb-0">
        {orders.length === 0 ? (
          <NoItems
            icon={noItemsIcon}
            heading="No order requests"
            subHeading="You dont have any new orders. Stay Tuned !"
          >
            <DarkButton
              onClick={() => router.push("/store")}
              className="w-2/5 mt-4 text-md"
            >
              Go To Store
            </DarkButton>
          </NoItems>
        ) : (
          <OrdersList orders={orders} />
        )}
      </MainContent>
      <OrdersCallender orders={orders} />
    </div>
  );
};

export default HomeMain;
