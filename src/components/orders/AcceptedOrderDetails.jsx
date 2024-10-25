import React, { useState } from "react";
import Image from "next/image";
import { NotepadText, ChevronRight, Check, Car } from "lucide-react";

import CustomDialog from "../common/CustomDialog";
import {
  CustomButton,
  DarkButton,
  LightButton,
  TransparentButton,
} from "../common/CustomButtons";
import { CustomCheckBox } from "../common/customInput";

function AcceptedOrderDetails({ openDialog, handleOpenDialog, order }) {
  const [orderStatus, setOrderStatus] = useState(false);

  const handeOrderStatus = () => {
    setOrderStatus((prev) => !prev);
  };

  const orderStatusOptions = [
    {
      id: 1,
      label: "Order placed",
    },
    {
      id: 2,
      label: "Order accepted",
    },
    {
      id: 3,
      label: "Order dispatched",
    },
    {
      id: 4,
      label: "Order shipped",
    },
    {
      id: 5,
      label: "Out for delivery",
    },
    {
      id: 6,
      label: "Delivered",
    },
  ];
  return (
    <>
      <CustomDialog
        open={openDialog}
        handleOpen={handleOpenDialog}
        title={"Order Details"}
        className="w-[48rem] h-max !overflow-x-hidden"
      >
        {order && (
          <>
            <div className="flex gap-4 mt-8 text-sm">
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semibold">Order id</div>
                <div className="text-[#4D5A62CC]">- 123456</div>
              </div>
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semibold">Placed on</div>
                <div className="text-[#4D5A62CC]">- 9.00 am, 14 Aug 2024</div>
              </div>
            </div>
            <div className="grid grid-cols-[54%,44%] gap-4 mt-4">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem]">Items</div>
                  <div className="flex flex-col gap-4 rounded-xl h-[16rem] overflow-auto bg-[var(--light)] p-2">
                    {order?.items?.map((item) => (
                      <div className="flex gap-4" key={item.id}>
                        <div className="w-[8rem] h-[7rem] overflow-hidden relative rounded-lg">
                          <Image
                            src={order.item?.images[0] || "/Furniture.jpeg"}
                            alt={item.name}
                            sizes="100"
                            layout="fill"
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1 mt-3 ">
                          <div className="text-[1rem] text-[#13070B] font-medium">
                            {item.name}
                          </div>
                          <div className="text-[#4E4548]">
                            Qty : {item.quantity}
                          </div>
                          <div className="text-[var(--lightblue)] font-medium mt-1">
                            ${item.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem]">
                    Orders Summary
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl  bg-[var(--light)] p-4 py-5">
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-[0.9rem]">Discount</div>
                      <div className="font-medium">%{order.discount}</div>
                    </div>
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-[0.9rem]">Total Items</div>
                      <div className="font-medium">{order.items.length}</div>
                    </div>
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-[0.9rem]">Coupon applied</div>
                      <div className="font-medium">{order.couponApplied}</div>
                    </div>
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-[0.9rem]">Total Cost</div>
                      <div className="font-medium">
                        ${order.totalAmount}
                        <span className="line-through ml-2 text-[#7D7779]">
                          ${order.actualCost}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="border-[1px] border-dashed mb-2" />
                      <div className="flex justify-between text-[#4E4548]">
                        <div className="font-semibold">Payment status</div>
                        <div className="text-[var(--main-green)] flex  gap-1 items-center">
                          <Check size={18} />
                          Paid
                        </div>
                      </div>
                      <div className="border-[1px] border-dashed mt-2" />
                    </div>

                    <div className="flex gap-2 justify-center items-center text-[var(--main-pink)]">
                      <NotepadText size={20} />
                      <div>Generate invoice</div>
                      <div className="ml-4">
                        <ChevronRight size={20} color="#B0B0B0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-6">
                <div className=" flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem]">
                    Delivery Status
                  </div>
                  <div className="flex  rounded-xl h-max  bg-[var(--light)] p-6">
                    <div className="w-full ">
                      <div className="relative mx-auto w-[90%] h-max  ">
                        <div className="border-[1px] border-dashed mt-2 w-full"></div>
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 bg-[var(--main-yellow)] rounded-full ">
                          <Check size={18} color="white" />
                        </div>
                        <div className="absolute left-1/2  top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-1 bg-[var(--main-yellow)] rounded-full ">
                          <Car size={18} color="white" />
                        </div>
                        <div className="absolute right-0  top-1/2 transform -translate-y-1/2 p-1 bg-[var(--main-yellow)] rounded-full ">
                          <Check size={18} color="white" />
                        </div>
                      </div>
                      <div className="flex justify-between text-[0.7rem] mt-5">
                        <div>Order accepted</div>
                        <div className="mr-5">Out for delivery</div>
                        <div>Delivered</div>
                      </div>
                      <CustomButton
                        className="flex gap-2 justify-center items-center text-[var(--main-pink)] bg-[var(--light-pink)] hover:bg-[var(--light-pink)] hover:opacity-90 py-2 mt-8 rounded-xl font-semibold text-sm w-full"
                        onClick={handeOrderStatus}
                      >
                        <div>Update Order status</div>
                        <div>
                          <ChevronRight size={20} />
                        </div>
                      </CustomButton>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem] ">
                    Client location details
                  </div>
                  <div className="flex flex-col rounded-xl h-max  bg-[var(--light)] pt-4 pb-8 px-4 gap-1">
                    <div className="text-[#303F49] text-[0.88rem]">
                      Location
                    </div>
                    <div className="text-[var(--main-gray)] text-[0.8rem] gap-2 max-w-[10rem]">
                      {order.customerDetails.address}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem] ">
                    Customer details
                  </div>
                  <div className="flex flex-col rounded-xl h-max  bg-[var(--light)] pt-4 pb-6 px-4">
                    <div className="flex gap-2">
                      <div className="rounded-full w-[65px] h-[65px] overflow-hidden">
                        <Image
                          alt={order.customerDetails.name}
                          src={order.customerDetails.profileImage}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className=" flex flex-col gap-[0.1rem] ">
                        <div className="text-[#00131F] font-semibold">
                          {order.customerDetails.name}
                        </div>
                        <div className="text-[#6E7980] text-sm">
                          {order.customerDetails.email}
                        </div>
                        <div className="text-[#6E7980] text-sm">
                          {1234567890}
                        </div>
                      </div>
                    </div>

                    <div className="border-[1px] border-dashed my-3" />
                    <div className=" mt-1 flex flex-col gap-1">
                      <div className="text-[#00131F] text-medium">
                        Shipping Address
                      </div>
                      <div className="text-[#4D5A62] text-sm">
                        {order.deliveryAddress}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </CustomDialog>

      <CustomDialog
        open={orderStatus}
        handleOpen={handeOrderStatus}
        title={"Order Status"}
        className="w-[25rem] h-max !bg-[#fff]  "
        anableCross={true}
      >
        <div className="flex flex-col  ">
          <div className=" mt-2 text-[0.8rem] text-[#6E7980] self-center">
            Please select an order status to display for end user.
          </div>

          <div className="flex flex-col mt-6">
            {orderStatusOptions.map((option, index) => (
              <div
                key={option.id}
                className=" py-[0.8rem] border-b border-[#E6E9EB]"
              >
                <div className="flex items-center gap-2">
                  <CustomCheckBox className="border border-[#E6E9EB]" />
                  <div className="text-[var(--main-gray)]">{option.label}</div>
                </div>
                {/* {index === orderStatusOptions.length - 1 && (
                  <hr className="border border-[#E6E9EB]  mt-2" />
                )} */}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 mt-8">
            <TransparentButton className=" text-[#5F5F5F] font-semibold">
              Rewind Status
            </TransparentButton>
            <DarkButton className="font-semibold" onClick={handeOrderStatus}>
              Confirm
            </DarkButton>
          </div>
        </div>
      </CustomDialog>
    </>
  );
}

export default AcceptedOrderDetails;
