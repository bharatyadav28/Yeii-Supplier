import React from "react";

import { DarkButton, TransparentButton } from "../common/CustomButtons";
import { ChevronUp } from "lucide-react";
import { IconButton } from "../common/customInput";
import { CustomCheckBox } from "../common/customInput";

function ListModal({
  label,
  list,
  onClick,
  handleOpen,
  isCheckBox = false,
  isCoupon,
  couponEvents,
}) {
  let handleDelete, handleEdit;
  if (isCoupon) {
    handleDelete = couponEvents.handleDelete;
    handleEdit = couponEvents.handleEdit;
  }
  return (
    <>
      <div
        className="z-10 text-black top-0 left-0 w-screen h-screen fixed   bg-black opacity-50  "
        onClick={handleOpen}
      ></div>

      <div
        className={`flex flex-col absolute  !z-[1000] h-max max-h-[calc(100vh-10rem)] overflow-y-auto w-max bg-white text-black top-8 rounded-3xl py-4 ${
          !isCheckBox ? "px-5" : "px-2"
        } `}
      >
        {isCoupon ? (
          <>
            <TransparentButton
              onClick={handleEdit}
              className={
                "text-[#4D5A62] border-0 border-b rounded-none border-black/10 flex justify-start !pl-0  "
              }
            >
              Edit
            </TransparentButton>
            <TransparentButton
              onClick={handleDelete}
              className={
                "text-[#4D5A62] border-0 rounded-none flex justify-start !pl-0  "
              }
            >
              Delete
            </TransparentButton>
          </>
        ) : (
          <>
            <div
              className={`flex justify-between  ${
                isCheckBox ? "mx-2 mb-3" : "mx-0 mb-2"
              } `}
            >
              <div className="text-[1.1rem] font-medium">{label}</div>
              <IconButton
                className="rounded-full p-2 bg-[#00141C14] "
                onClick={handleOpen}
              >
                <ChevronUp size={13} />
              </IconButton>
            </div>

            {!isCheckBox &&
              list?.map((item) => (
                <TransparentButton
                  className={
                    "text-[#4D5A62] border-0 border-b rounded-none border-black/10 flex justify-start !pl-0  "
                  }
                  key={item}
                >
                  {item}
                </TransparentButton>
              ))}

            {isCheckBox &&
              list?.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 border-b  border-black/10 pb-2 mb-3"
                >
                  <CustomCheckBox className="border border-[#E6E9EB] h-5 w-5" />
                  <div className="text-[var(--main-gray)] text-xs min-w-[8rem] p">
                    {item}
                  </div>
                </div>
              ))}

            {isCheckBox && (
              <DarkButton className="rounded-2xl mt-2 mx-2">Confirm</DarkButton>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ListModal;
