import React, { useState } from "react";
import Image from "next/image";
import { NotepadText, ChevronRight, Check } from "lucide-react";

import CustomDialog from "../common/CustomDialog";
import {
  CustomButton,
  DarkButton,
  LightButton,
  TransparentButton,
} from "../common/CustomButtons";
import { CustomCheckBox } from "../common/customInput";
import { useTranslations } from "next-intl";
import { copyIcon, tructDilevery } from "@/lib/svg_icons";

function AcceptedOrderDetails({ openDialog, handleOpenDialog, order }) {
  const [orderStatus, setOrderStatus] = useState(false);
  const t = useTranslations("orderDetails");

  const handeOrderStatus = () => {
    setOrderStatus((prev) => !prev);
  };

  const orderStatusOptions = [
    {
      id: 1,
      label: t("order_placed"),
    },
    {
      id: 2,
      label: t("order_accepted"),
    },
    {
      id: 3,
      label: t("order_dispatched"),
    },
    {
      id: 4,
      label: t("order_shipped"),
    },
    {
      id: 5,
      label: t("out_for_delivery"),
    },
    {
      id: 6,
      label: t("delivered"),
    },
  ];
  return (
    <>
      <CustomDialog
        open={openDialog}
        handleOpen={handleOpenDialog}
        title={t("order_details")}
        className="w-[48rem] h-max !overflow-x-hidden"
      >
        {order && (
          <>
            <div className="flex gap-4 mt-6 text-sm">
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semibold">
                  {t("order_id")}
                </div>
                <div className="text-[#4D5A62CC]">- 123456</div>
              </div>
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semibold">
                  {t("placed_on")}
                </div>
                <div className="text-[#4D5A62CC]">- 9.00 am, 14 Aug 2024</div>
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
                        {order.couponApplied}
                      </div>
                    </div>
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-xs">{t("total_cost")}</div>
                      <div className="font-medium text-base">
                        ${order.totalAmount}
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
                  <div className="flex  rounded-xl h-max  bg-[var(--light)] p-5">
                    <div className="w-full ">
                      <div className="relative mx-auto w-[90%] h-max  ">
                        <div className="border-[1px] border-dashed mt-2 w-full"></div>
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 bg-[var(--main-yellow)] rounded-full ">
                          <Check size={15} color="white" />
                        </div>
                        <div className="absolute left-1/2  top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-1  rounded-full ">
                          {tructDilevery}
                        </div>
                        <div className="absolute right-0  top-1/2 transform -translate-y-1/2 p-1 bg-[var(--main-yellow)] rounded-full ">
                          <Check size={15} color="white" />
                        </div>
                      </div>
                      <div className="flex justify-between text-[10px] mt-5">
                        <div>{t("order_accepted")}</div>
                        <div className="mr-5">{t("out_for_delivery")}</div>
                        <div>{t("delivered")}</div>
                      </div>
                      <CustomButton
                        className="flex gap-2 justify-center items-center text-[var(--main-pink)] bg-[var(--light-pink)] hover:bg-[var(--light-pink)] hover:opacity-90 py-2 mt-8 rounded-xl font-semibold text-xs w-full"
                        onClick={handeOrderStatus}
                      >
                        <div>{t("update_order_status")}</div>
                        <div>
                          <ChevronRight size={15} />
                        </div>
                      </CustomButton>
                    </div>
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
                      {order.customerDetails.address}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem] ">
                    {t("customer_details")}
                  </div>
                  <div className="flex flex-col rounded-xl h-max  bg-[var(--light)] pt-4 pb-4 px-4">
                    <div className="flex gap-2">
                      <div className="rounded-full w-[64px] h-[64px] overflow-hidden">
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
                        <div className="text-[#6E7980] text-xs flex items-center gap-1">
                          {order.customerDetails.email}
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
              {t("rewind_status")}
            </TransparentButton>
            <DarkButton className="font-semibold" onClick={handeOrderStatus}>
              {t("confirm")}
            </DarkButton>
          </div>
        </div>
      </CustomDialog>
    </>
  );
}

export default AcceptedOrderDetails;
