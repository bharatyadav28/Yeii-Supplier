import React from "react";
import { Plus, Image } from "lucide-react";
import { CustomButton } from "./CustomButtons";

function DefaultItemImage() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full text-[var(--main-pink)] gap-4">
      <Image />
      <CustomButton className="bg-[#F6309314] hover:bg-[#F6309314] !px-[6rem] text-[var(--main-pink)] text-center  text[0.8rem">
        Upload Image
      </CustomButton>
    </div>
  );
}

export default DefaultItemImage;
