"use client";

import { noItemsIcon } from "@/lib/svg_icons";
import MainContent from "../common/MainContent";
import NoItems from "../common/NoItems";
import OrdersCallender from "./OrdersCallender";
import storeData from "@/lib/dummyData/storeData.json";
import { DarkButton } from "../common/CustomButtons";
import { useRouter } from "next/navigation";

const HomeMain = () => {
  const title = "Order Request";

  const router = useRouter();

  const storeData = [];
  return (
    <div className="w-full h-full flex gap-5 pb-4">
      <MainContent contentTitle={title} count={storeData.length}>
        {storeData.length === 0 ? (
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
          <div></div>
        )}
      </MainContent>
      <OrdersCallender />
    </div>
  );
};

export default HomeMain;
