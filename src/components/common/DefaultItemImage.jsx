import React from "react";
import { Plus, Image as GalleryImage } from "lucide-react";
import Image from "next/image";

import { CustomButton } from "./CustomButtons";
import { Input } from "../ui/input";

function DefaultItemImage() {
  const addMoreImageBtn = (
    <>
      <Input type="file" className="hidden image-upload" />

      <CustomButton
        className="bg-[var(--light-pink)] hover:bg-[#F6309314]  text-[var(--main-pink)] p-0 m-0 w-full  h-full "
        onClick={() => document.querySelector(".image-upload").click()}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <Plus size={24} />
          <div className="text-[0.8rem] ">Add Image</div>
        </div>
      </CustomButton>
    </>
  );

  return (
    <div className="flex flex-col justify-center items-center h-full w-full text-[var(--main-pink)] gap-4">
      {/* <GalleryImage />
      <Input type="file" className="hidden image-upload" />
      <CustomButton
        className="bg-[var(--light-pink)] hover:bg-[#F6309314] !px-[6rem] text-[var(--main-pink)] text-center  text[0.8rem"
        onClick={() => document.querySelector(".image-upload").click()}
      >
        Upload Image
      </CustomButton> */}

      <div className="grid grid-cols-6 p-2 gap-2 h-full w-full ">
        <div className="relative">
          <Image
            src="/Furniture.jpeg"
            alt="product image"
            fill={true}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="h-full w-full">{addMoreImageBtn}</div>
      </div>
    </div>
  );
}

export default DefaultItemImage;
