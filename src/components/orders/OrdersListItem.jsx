import React, { useState } from "react";

import Image from "next/image";
import ItemCard from "../common/ItemCard";
import AcceptedOrderDetails from "./AcceptedOrderDetails";

function OrdersListItem({ order, t }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={handleOpenDialog}
        className="bg-[var(--light)]  flex flex-col gap-3 w-full min-w-[12rem]  p-4 rounded-2xl  cursor-pointer"
      >
        {/* header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full w-[35px] h-[35px] overflow-hidden">
              <Image
                alt={order.userDetails.name}
                src={order.userDetails.profileImage}
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="font-bold text-sm">{order.userDetails.name}</h1>
              <p className="text-[10px] text-[var(--main-gray)] ">
                {order.userDetails.address?.substring(0, 20)}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-[0.7rem] text-[var(--medium-gray)]">
              {t("order_status")}
            </div>
            <div className="text-[0.875rem] whitespace-nowrap text-[var(--main-orange)]">
              {order.orderStatus}
              {/* {t("order_accepted")} */}
            </div>
          </div>
        </div>
        {/* dashed line */}
        <div className="border-[1px] border-dashed"></div>
        {/* main */}
        <div className="grid grid-cols-2 gap-2">
          {order?.items.map((item, index) => (
            <ItemCard
              key={item._id}
              item={item}
              isOrdersPage={true}
              index={index}
            />
          ))}
        </div>

        {/* bottom dashed line */}
        <div className="border-[1px] border-dashed"></div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-[10px] text-[var(--main-gray)] ">
              {t("order_id")}
            </div>
            <div className="text-[0.9rem] font-semibold">{order.id}</div>
          </div>

          <div className="text-center">
            <div className="text-xs text-[var(--main-gray)] ">{t("total")}</div>
            <div className="text-[var(--lightblue)] font-semibold">
              ${order.totalPrice}
            </div>
          </div>
        </div>
      </div>

      <AcceptedOrderDetails
        openDialog={openDialog}
        handleOpenDialog={handleOpenDialog}
        order={order}
      />
    </>
  );
}

export default OrdersListItem;
