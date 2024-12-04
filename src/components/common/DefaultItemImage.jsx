import React, { useEffect, useState } from "react";
import { Plus, Image as GalleryImage } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { CustomButton } from "./CustomButtons";
import { Input } from "../ui/input";
import { CancelIcon } from "@/lib/svg_icons";
import { IconButton } from "./customInput";
// import { uploadImage } from "@/lib/serverActions";

function DefaultItemImage() {
  const t = useTranslations();
  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(
      "Image:",
      image,
      "token",
      localStorage.getItem("supplier_token")
    );
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("files", image);

      const response = await fetch(
        `https://yeii-api.onrender.com/upload-image`,
        {
          method: "POST",
          // Don't set Content-Type header - let the browser set it with boundary for FormData
          headers: {
            // Authorization: `Bearer ${localStorage.getItem("supplier_token")}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Upload failed");
      }

      const data = await response.json();
      console.log("Upload successful:", data);
    };

    if (image) {
      uploadImage().then((res) => {
        console.log("response", res);
      });
      console.log("dsdsd");
    }
  }, [image]);

  const addMoreImageBtn = (
    <>
      <Input
        type="file"
        className="hidden image-upload"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <CustomButton
        className="bg-[var(--light-pink)] hover:bg-[#F6309314]  text-[var(--main-pink)] p-0 m-0 w-full  h-full "
        onClick={() => document.querySelector(".image-upload").click()}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <Plus size={24} />
          <div className="text-[0.75rem] ">{t("addImage")}</div>
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
          <IconButton className="z-100 absolute top-1 right-1">
            {CancelIcon}
          </IconButton>
        </div>
        <div className="h-full w-full">{addMoreImageBtn}</div>
      </div>
    </div>
  );
}

export default DefaultItemImage;
