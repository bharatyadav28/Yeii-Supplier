import React, { useState } from "react";

import Image from "next/image";
import ItemCard from "../common/ItemCard";
import AcceptedOrderDetails from "./AcceptedOrderDetails";

function OrdersListItem({ order }) {
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
                alt={order.customerDetails.name}
                src={order.customerDetails.profileImage}
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="font-bold text-sm">
                {order.customerDetails.name}
              </h1>
              <p className="text-[10px] text-[var(--main-gray)] ">
                {order.customerDetails.address?.substring(0, 20)}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-[0.7rem] text-[var(--medium-gray)]">
              Order Status{" "}
            </div>
            <div className="text-[0.875rem] whitespace-nowrap text-[var(--main-orange)]">
              {order.orderStatus}
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
            <div className="text-[10px] text-[var(--main-gray)] ">Order id</div>
            <div className="text-[0.9rem] font-semibold">{order.orderId}</div>
          </div>

          <div className="text-center">
            <div className="text-xs text-[var(--main-gray)] ">Total</div>
            <div className="text-[var(--lightblue)] font-semibold">
              ${order.totalAmount}
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
