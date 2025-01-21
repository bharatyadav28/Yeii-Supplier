import React, { useEffect, useState } from "react";
import { Plus, Image as GalleryImage } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { CustomButton } from "./CustomButtons";
import { Input } from "../ui/input";
import { CancelIcon } from "@/lib/svg_icons";
import { IconButton } from "./customInput";
import LoadingSpinner from "./LoadingSpinner";
// import { uploadImage } from "@/lib/serverActions";

function DefaultItemImage({ allImages, setAllImages, isDisabled }) {
  const t = useTranslations();
  const [image, setImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("images", image);

      setIsUploading(true);
      const response = await fetch(
        `https://yeii-api.onrender.com/upload-image`,
        {
          method: "POST",
          // Don't set Content-Type header - let the browser set it with boundary for FormData
          headers: {
            Authorization: `${localStorage.getItem("supplier_token")}`,
          },
          body: formData,
        }
      );
      setIsUploading(false);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Upload failed");
      }

      const data = await response.json();
      setAllImages((prev) => [...prev, data.url[0]]);
    };

    if (image) {
      uploadImage().then((res) => {
        console.log("response", res);
      });
    }
  }, [image]);

  const addMoreImageBtn = (
    <>
      <CustomButton
        className="bg-[var(--light-pink)] hover:bg-[#F6309314]  text-[var(--main-pink)] p-0 m-0 w-full  h-full relative "
        onClick={() => {
          if (isUploading) return;
          document.querySelector(".image-upload").click();
        }}
        disabled={isDisabled}
      >
        {!isUploading && (
          <div className="flex flex-col items-center justify-center gap-2">
            <Plus size={24} />
            <div className="text-[0.75rem] ">{t("addImage")}</div>
          </div>
        )}
        {isUploading && (
          <div className="absolute  bg-opacity-35">
            <LoadingSpinner />
          </div>
        )}
      </CustomButton>
    </>
  );

  const isEmpty = allImages.length === 0;
  return (
    <div className="flex flex-col justify-center items-center h-full w-full text-[var(--main-pink)] gap-4">
      <Input
        type="file"
        className="hidden image-upload"
        name="image"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      {isEmpty && (
        <>
          <GalleryImage />
          <Input type="file" className="hidden image-upload" />
          <CustomButton
            className="bg-[var(--light-pink)] hover:bg-[#F6309314] !px-[6rem] text-[var(--main-pink)] text-center  text[0.8rem relative"
            onClick={() => {
              if (isUploading || isDisabled) return;
              document.querySelector(".image-upload").click();
            }}
          >
            {isUploading ? (
              <div className="absolute">
                {" "}
                <LoadingSpinner />{" "}
              </div>
            ) : (
              "Upload Image"
            )}
          </CustomButton>
        </>
      )}

      {!isEmpty && (
        <div className="grid grid-cols-6 p-2 gap-2 h-full w-full">
          {allImages?.map((image, index) => {
            return (
              <div className="relative" key={index}>
                <Image
                  src={image}
                  alt="product image"
                  fill={true}
                  className="rounded-lg object-cover"
                />
                {!isDisabled && (
                  <IconButton
                    className="z-100 absolute top-1 right-1"
                    onClick={() =>
                      setAllImages((prev) => prev.filter((_, i) => i !== index))
                    }
                  >
                    {CancelIcon}
                  </IconButton>
                )}
              </div>
            );
          })}

          {allImages?.length > 0 && allImages?.length < 6 && !isDisabled && (
            <div className="h-full w-full ">{addMoreImageBtn}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default DefaultItemImage;
