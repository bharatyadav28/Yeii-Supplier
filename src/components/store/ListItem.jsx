import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Switch } from "../ui/switch";
import { useTranslations } from "next-intl";

import { Dot } from "lucide-react";
import StoreDialog from "./StoreDialog";
import ViewItem from "./ViewItem";
import { updateItem, updateProduct } from "@/lib/serverActions";

// Each item
function ListItem({ item, isService, t }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [availability, setAvailability] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  useEffect(() => {
    setAvailability(item.availability);
  }, [item]);

  return (
    <>
      <div
        className="bg-[var(--light)]  flex  min-w-[18rem]  p-2 rounded-3xl  cursor-pointer"
        onClick={handleOpenDialog}
      >
        <div className="flex-grow-1 basis-5/12 relative ">
          <Image
            src={item.images[0]}
            alt={item.name}
            layout="fill"
            priority
            sizes="100"
            className="rounded-3xl object-cover"
          />
        </div>

        <div className=" my-4 mx-3 flex flex-col flex-grow-1 basis-7/12">
          <div className="text-sm text-[var(--medium-gray)]">
            {item.category}
          </div>
          <div className=" font-semibold">{item.name}</div>

          {!isService && (
            <div className="flex items-center gap-1">
              <div className="text-sm text-nowrap text-[var(--medium-gray)]">
                {t("availableQuantity")}
              </div>
              <div className="text-[var(--lightblue)] ">
                <Dot className="!w-[1rem] font-bold" />
              </div>
              <div className="text-sm text-[var(--lightblue)]">
                {item.quantity}
              </div>
            </div>
          )}

          {isService && (
            <div className="flex gap-1 items-center mt-1">
              <div className="text-sm text-nowrap text-[var(--medium-gray)]">
                {t("availableTime")}
              </div>
              <div className="text-[var(--lightblue)] ">
                <Dot className="!w-[1rem] font-bold" />
              </div>
              <div className="text-[0.7rem] text-[var(--lightblue)]">
                {item.availabilityTime.startTime} to{" "}
                {item.availabilityTime.endTime}
              </div>
            </div>
          )}

          <div
            className="flex items-center justify-between w-full mt-3 "
            onClick={(event) => event.stopPropagation()}
          >
            <div className="text-lg font-semibold">
              {" "}
              ${item.discountedPrice}
            </div>
            <div>
              <Switch
                checked={availability}
                onClick={async () => {
                  setAvailability((prev) => !prev);
                  await updateItem({
                    id: item.id,
                    item: { availability: !item.availability },
                    isService,
                  });
                }}
                className="data-[state=checked]:bg-[var(--main-pink)] "
              />
            </div>
          </div>
        </div>
      </div>

      <ViewItem
        openDialog={openDialog}
        handleOpenDialog={handleOpenDialog}
        item={item}
        t={t}
        title={` ${isService ? t("servicesDetails") : t("productsDetails")}`}
        formType={isService ? "services" : "products"}
      />
    </>
  );
}

export default ListItem;
