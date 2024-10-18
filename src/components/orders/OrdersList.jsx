"use client";

import React from "react";

import MainContent from "../common/MainContent";
import NoItems from "../common/NoItems";
import { noOrdersIcon } from "@/lib/svg_icons";
import SearchInput from "../common/SearchInput";
import { SelectInput } from "../common/customInput";
import OrderItem from "../common/OrderItem";
import OrdersListItem from "./OrdersListItem";

function OrdersList({ data }) {
  const emptyHeading = "You have no orders at this moment";
  const emptySubHeading = (
    <p>Build your online store with Brincos dieras and get orders.</p>
  );

  const isEmpty = data.length === 0;
  return (
    <MainContent contentTitle="My Orders" count={data?.length || 0}>
      <div className="flex gap-2 mt-4">
        <SearchInput
          className="bg-[var(--light)] rounded-full py-4"
          onChange={() => {}}
        />
        <SelectInput
          className="!text-[0.8rem]  right-3   h-[2rem] !py-0"
          placeholder={`Sort by`}
          menu={["Order Accepted sddsdsd s", "Per Day"]}
          //   value={item?.category}
        />
      </div>
      {isEmpty ? (
        <NoItems
          icon={noOrdersIcon}
          heading={emptyHeading}
          subHeading={emptySubHeading}
        />
      ) : (
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 ">
          {data?.map((order) => (
            <OrdersListItem
              key={order._id}
              order={order}
              onClick={() => {}}
              isOrderPage={true}
            />
          ))}
        </div>
      )}
    </MainContent>
  );
}

export default OrdersList;
