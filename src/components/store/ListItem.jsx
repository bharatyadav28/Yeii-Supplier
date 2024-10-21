import React, { useState } from "react";
import Image from "next/image";
import { Switch } from "../ui/switch";

import { Dot } from "lucide-react";
import StoreDialog from "./StoreDialog";
import ViewItem from "./ViewItem";

function ListItem({ item, isService }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  return (
    <>
      <div
        className="bg-[var(--light)]  flex  w-[calc(33.333%-1rem)] min-w-[22rem]  p-2 rounded-3xl  cursor-pointer"
        onClick={handleOpenDialog}
      >
        <div className="flex-grow-1 basis-5/12 relative ">
          <Image
            alt="image"
            src={item.images[0] || "/Furniture.jpeg"}
            alt={item.name}
            layout="fill"
            priority
            sizes="100"
            //   objectFit="cover"
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
                Available Quantity
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
                Available time
              </div>
              <div className="text-[var(--lightblue)] ">
                <Dot className="!w-[1rem] font-bold" />
              </div>
              <div className="text-[0.7rem] text-[var(--lightblue)]">
                {item.availabilityTime.start} to {item.availabilityTime.end}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between w-full mt-3 ">
            <div className="text-lg font-semibold">
              {" "}
              ${item.discountedPrice}
            </div>
            <div>
              <Switch
                checked={item.availability}
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
        title={` ${isService ? "Service" : "Product"} details`}
        formType={isService ? "Service" : "Product"}
      />
    </>
  );
}

export default ListItem;
