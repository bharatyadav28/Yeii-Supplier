import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NotepadText, ChevronRight, Check } from "lucide-react";
import { Dot } from "lucide-react";

import CustomDialog from "../common/CustomDialog";
import {
  CustomButton,
  DarkButton,
  LightButton,
  TransparentButton,
} from "../common/CustomButtons";
import { CustomCheckBox } from "../common/customInput";
import { useTranslations } from "next-intl";
import { copyIcon } from "@/lib/svg_icons";
import { formatDate } from "@/lib/functions";
import { updateDeliveryStatus } from "@/lib/serverActions";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../common/LoadingSpinner";
import { getOrderStatusOptions } from "@/lib/functions";

function AcceptedOrderDetails({ openDialog, handleOpenDialog, order }) {
  const [orderStatus, setOrderStatus] = useState(false);
  const t = useTranslations("orderDetails");

  const [deliveryStatus, setDeliveryStatus] = useState(0);

  const { isLoading: isStatusUpdating, dbConnect } = useHttp();

  const handleOrderStatus = async () => {
    setOrderStatus((prev) => !prev);
  };

  const updateOrderStatus = async (isRewind = false) => {
    if (isStatusUpdating) return;

    let data = {
      deliveryStatus: deliveryStatus,
      type: order.orderType,
    };
    if (isRewind) {
      data.deliveryStatus =
        data.deliveryStatus > 0 ? data.deliveryStatus - 1 : 0;
      setDeliveryStatus(data.deliveryStatus);
    }

    await dbConnect(updateDeliveryStatus.bind(null, data, order.id));
    handleOrderStatus();
  };

  const orderStatusOptions = getOrderStatusOptions(t);

  const miletones = orderStatusOptions;
  const current = deliveryStatus;

  useEffect(() => {
    if (order?.deliveryStatus) {
      setDeliveryStatus(order.deliveryStatus);
    }
  }, [order]);

  return (
    <>
      <CustomDialog
        open={openDialog}
        handleOpen={handleOpenDialog}
        title={t("order_details")}
        className="w-[48rem] h-max max-h-[calc(100%-2.5rem)] !overflow-x-hidden"
      >
        {order && (
          <>
            <div className="flex gap-4 mt-6 text-sm">
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semibold">
                  {t("order_id")}
                </div>
                <div className="text-[#4D5A62CC]">- {order.id}</div>
              </div>
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semibold">
                  {t("placed_on")}
                </div>
                <div className="text-[#4D5A62CC]">
                  - {formatDate(order.createdAt)}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[54%,44%] gap-4 mt-4">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem]">{t("items")}</div>
                  <div className="flex flex-col gap-4 rounded-xl h-[14rem] overflow-auto bg-[var(--light)] p-2">
                    {order?.items?.map((item) => (
                      <div className="flex gap-4" key={item.id}>
                        <div className="w-[8rem] h-[6rem] overflow-hidden relative rounded-lg">
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
                            {t("qyt")} : {item.quantity}
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
                    {t("order_summary")}
                  </div>
                  <div className="flex flex-col gap-3 rounded-xl  bg-[var(--light)] p-4 py-5">
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-xs">{t("discount")}</div>
                      <div className="font-medium text-base">
                        %{order.discount}
                      </div>
                    </div>
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-xs">{t("total_items")}</div>
                      <div className="font-medium text-base">
                        {order.items.length}
                      </div>
                    </div>
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-xs">{t("coupon_applied")}</div>
                      <div className="font-medium text-base">
                        {order.couponApplied || "No"}
                      </div>
                    </div>
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-xs">{t("total_cost")}</div>
                      <div className="font-medium text-base">
                        ${order.totalPrice}
                        <span className="line-through ml-2 text-[#7D7779]">
                          ${order.actualCost}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="border-[1px] border-dashed mb-2" />
                      <div className="flex justify-between text-[#4E4548] text-sm">
                        <div className="font-semibold">
                          {t("payment_status")}
                        </div>
                        <div className="text-[var(--main-green)] flex  gap-1 items-center">
                          <Check size={18} />
                          {t("paid")}
                        </div>
                      </div>
                      <div className="border-[1px] border-dashed mt-2" />
                    </div>

                    <button className="flex gap-2 justify-center items-center text-[var(--main-pink)] text-base">
                      <NotepadText size={20} />
                      <div>{t("generate_invoice")}</div>
                      <div className="ml-4">
                        <ChevronRight size={20} color="#B0B0B0" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-4">
                <div className=" flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem]">
                    {t("delivery_status")}
                  </div>
                  <div className="flex  flex-col rounded-xl h-max  bg-[var(--light)] p-5">
                    <div className="text-[0.66rem]">
                      <span className="text-[#958F91]">Today,</span>{" "}
                      <span className="text-[#7D7779]"> Aug 9, Sat 2024 </span>
                    </div>
                    <div className="font-medium mt-1 text-[1.3rem]">
                      {
                        orderStatusOptions.find(
                          (option) => option.key === deliveryStatus
                        ).label
                      }
                    </div>

                    <div className="relative mt-2">
                      <div className="w-full h-[1.5rem] rounded-full bg-[#F1F4F6] flex justify-around items-center px-2">
                        {miletones.map((_, index) => (
                          <Dot
                            size={40}
                            key={index}
                            color={index !== current ? "#00000040" : "#fff"}
                            className="!z-[1000]"
                          />
                        ))}
                      </div>

                      <div
                        className={`absolute top-0  h-[1.5rem] rounded-full delivery-status flex justify-between px-2 `}
                        style={{
                          width: `${((current + 1) * 100) / miletones.length}%`,
                        }}
                      ></div>
                    </div>

                    <CustomButton
                      className="flex gap-2 justify-center items-center text-[var(--main-pink)] bg-[var(--light-pink)] hover:bg-[var(--light-pink)] hover:opacity-90 py-2 mt-6 rounded-xl font-semibold text-xs w-full"
                      onClick={handleOrderStatus}
                    >
                      <div>{t("update_order_status")}</div>
                      <div>
                        <ChevronRight size={15} />
                      </div>
                    </CustomButton>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem] ">
                    {t("client_location")}
                  </div>
                  <div className="flex flex-col rounded-xl h-max  bg-[var(--light)] pt-4 pb-4 px-4 gap-1">
                    <div className="text-[#303F49] text-[0.88rem]">
                      {t("location")}
                    </div>
                    <div className="text-[var(--main-gray)] text-[0.8rem] gap-2 max-w-[10rem]">
                      {order.userDetails.address}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 !h-full">
                  <div className="font-medium text-[1.1rem] ">
                    {t("customer_details")}
                  </div>
                  <div className="flex flex-col rounded-xl  bg-[var(--light)] pt-4 pb-4 px-4 h-full">
                    <div className="flex gap-2">
                      <div className="rounded-full w-[64px] h-[64px] overflow-hidden">
                        <Image
                          alt={order.userDetails.name}
                          src={order.userDetails.image}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className=" flex flex-col gap-[0.1rem] ">
                        <div className="text-[#00131F] font-semibold">
                          {order.userDetails.name}
                        </div>
                        <div className="text-[#6E7980] text-xs flex items-center gap-1">
                          {order.userDetails.email}
                          <button>{copyIcon}</button>
                        </div>
                        <div className="text-[#6E7980] text-xs flex items-center gap-1">
                          {1234567890}
                          <button>{copyIcon}</button>
                        </div>
                      </div>
                    </div>

                    <div className="border-[1px] border-dashed my-3" />
                    <div className=" mt-1 flex flex-col gap-1">
                      <div className="text-[#00131F] text-base">
                        {t("shipping")}
                      </div>
                      <div className="text-[#4D5A62] text-xs">
                        {order.userDetails.address}
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
        handleOpen={handleOrderStatus}
        title={t("order_status")}
        className="w-[25rem] h-max !bg-[#fff]  "
        anableCross={true}
      >
        <div className="flex flex-col  ">
          <div className=" mt-2 text-[0.8rem] text-[#6E7980] self-center">
            {t("order_status_heading")}
          </div>

          <div className="flex flex-col mt-6">
            {orderStatusOptions.map((option, index) => (
              <div
                key={option.id}
                className=" py-[0.8rem] border-b border-[#E6E9EB]"
              >
                <div className="flex items-center gap-2">
                  <CustomCheckBox
                    value={deliveryStatus === option.key}
                    onChange={() => setDeliveryStatus(option.key)}
                    className="border border-[#E6E9EB]"
                  />
                  <div className="text-[var(--main-gray)]">{option.label}</div>
                </div>
                {/* {index === orderStatusOptions.length - 1 && (
                  <hr className="border border-[#E6E9EB]  mt-2" />
                )} */}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 mt-8">
            <TransparentButton
              className=" text-[#5F5F5F] font-semibold"
              onClick={() => updateOrderStatus(true)}
              disabled={isStatusUpdating}
            >
              {t("rewind_status")}
            </TransparentButton>
            <DarkButton
              className="font-semibold w-full"
              onClick={() => updateOrderStatus(false)}
            >
              {isStatusUpdating ? <LoadingSpinner /> : t("confirm")}
            </DarkButton>
          </div>
        </div>
      </CustomDialog>
    </>
  );
}

export default AcceptedOrderDetails;
