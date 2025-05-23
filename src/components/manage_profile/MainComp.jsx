"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Input } from "../ui/input";

// import { user } from "@/lib/dummyData/userData.json";
import { SelectInput, TextArea, TextInput } from "../common/customInput";
import { BusinessIcon, EmailIcon, UserIcon } from "@/lib/icons";
import { DarkButton, LightButton } from "../common/CustomButtons";
import { editIcon } from "@/lib/svg_icons";
import { updateProfile } from "@/lib/serverActions";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../common/LoadingSpinner";
import PageLoader from "../common/PageLoader";

const MainComp = ({ isEdit, setIsEdit, user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    image: user.image,
    phoneNumber: user.phoneNumber,
    email: user.email,
    operating_as: user.operating_as,
    address: user.address,
    type: "supplier",
  });

  const t = useTranslations("signupPage");
  const menu = ["Business", "Company", "Organization"];

  const { isLoading: isSubmitting, dbConnect } = useHttp();
  const [image, setImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleClick = () => {
    setIsEdit();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dbConnect(updateProfile.bind(null, formData));
    handleClick();
  };

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
      setFormData((prev) => ({ ...prev, image: data.url[0] }));
    };

    if (image) {
      uploadImage().then((res) => {});
    }
  }, [image]);

  return (
    <div className=" w-[410px] flex-grow flex flex-col gap-4 !h-full px-3 mb-6 custom-scrollbar">
      <div className="self-center flex flex-col items-center">
        <div className="relative w-[120px] h-[120px]  rounded-full border-4 mb-2">
          <Input
            type="file"
            className="hidden image-upload"
            name="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          {!isUploading ? (
            <Image
              src={formData.image || user.image}
              alt={user.name}
              fill
              className="w-full h-full rounded-full"
            />
          ) : (
            <PageLoader className="w-[1.8rem] h-[1.8rem]" />
          )}
          <DarkButton
            type="file"
            className={`absolute w-8 h-8 right-0 bottom-0 rounded-full border-4 flex justify-center items-center p-[6px] ${
              isEdit || isUploading ? "cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (isUploading || isEdit) return;
              document.querySelector(".image-upload").click();
            }}
          >
            {editIcon}
          </DarkButton>
        </div>
        <div className="text-lg text-white font-bold ">{user.name}</div>
        <div className="text-sm text-white">{user.email}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <TextInput
          className="text-sm"
          customIcon={<UserIcon color="gray" />}
          type="text"
          label={t("fullName")}
          placeholder={t("fullNamePlaceholder")}
          value={formData.name}
          required={true}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isEdit}
        />

        <TextInput
          className="text-sm"
          customIcon={<EmailIcon />}
          type="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          required={true}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={true}
        />

        <SelectInput
          className="!pl-0"
          customIcon={<BusinessIcon />}
          value={formData.operating_as}
          required={true}
          menu={menu}
          label={t("bussinessLabel")}
          onChange={(e) => setFormData({ ...formData, operating_as: e })}
          disabled={isEdit}
        />

        <div className="flex items-center bg-white rounded-[15px] mb-2 py-1 ">
          <div className="pl-5">
            <label className="text-[var(--main-gray)] text-xs">
              {t("phoneNumber")}
            </label>
            <PhoneInput
              disabled={isEdit}
              country={"us"} // Default country
              value={formData.phoneNumber}
              onChange={(phone) =>
                setFormData({ ...formData, phoneNumber: phone })
              }
              inputProps={{
                name: "phoneNumber",
                required: true,
                autoFocus: true,
              }}
              containerClass="phone-input-container w-full" // Custom container class for styling
            />
          </div>
        </div>

        <TextArea
          className="text-sm"
          customIcon={<MapPin color="gray" />}
          label={t("address")}
          placeholder={t("addressPlaceholder")}
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          width="500px"
          disabled={isEdit}
          required={true}
        />
        {isEdit ? (
          <DarkButton
            onClick={handleClick}
            className="w-full mt-3 py-6 text-base"
          >
            {t("edit")}
          </DarkButton>
        ) : (
          <>
            <DarkButton isSubmit={true} className="w-full mt-3 py-6 text-base">
              {isSubmitting ? <LoadingSpinner /> : t("save_changes")}
            </DarkButton>
            <LightButton
              onClick={handleClick}
              className="w-full mt-2 py-6 text-base"
            >
              {t("cancel")}
            </LightButton>
          </>
        )}
      </form>
    </div>
  );
};

export default MainComp;
