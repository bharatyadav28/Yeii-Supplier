"use client";

import React, { useState } from "react";
import { ChevronDown, ListFilter } from "lucide-react";

import MainContent from "../common/MainContent";
import NoItems from "../common/NoItems";
import { noOrdersIcon } from "@/lib/svg_icons";
import SearchInput from "../common/SearchInput";
import OrdersListItem from "./OrdersListItem";
import { TransparentButton } from "../common/CustomButtons";
import ListModal from "./ListModal";
import { getLast12Months } from "@/lib/functions";

const MenuButton = ({ label, Icon, list, isCheckBox = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <TransparentButton
        className="text-[0.8rem] flex items-center  w-max  !py-4 !border-0  rounded-full"
        onClick={handleMenuOpen}
      >
        <div> {label}</div>
        <Icon className="ml-2" size={16} />
      </TransparentButton>
      {menuOpen && (
        <ListModal
          handleOpen={handleMenuOpen}
          list={list}
          label={label}
          isCheckBox={isCheckBox}
        />
      )}
    </div>
  );
};

function OrdersList({ data }) {
  const emptyHeading = "You have no orders at this moment";
  const emptySubHeading = (
    <p>Build your online store with Brincos dieras and get orders.</p>
  );

  const isEmpty = data.length === 0;
  return (
    <MainContent contentTitle="My Orders" count={data?.length || 0}>
      <div className="flex gap-4 mt-4 items-center">
        <SearchInput
          className="bg-[var(--light)] rounded-full py-4 border-none"
          onChange={() => {}}
        />

        <MenuButton
          label="Filter"
          Icon={ListFilter}
          isCheckBox={true}
          list={getLast12Months()}
        />
        <MenuButton
          label="Sort by"
          Icon={ChevronDown}
          list={[
            "Order  accepted",
            "Order shipped",
            "Cancelled",
            "Out for delivery",
            "Delivered",
          ]}
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
