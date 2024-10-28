"use client";
import { useState } from "react";

import { CustomButton, LightButton, DarkButton } from "../common/CustomButtons";
import SearchInput from "../common/SearchInput";
import StoreDialog from "./StoreDialog";
import { useTranslations } from "next-intl";

const HeadMenu = ({ itemsType, handleTypeChange }) => {
  const t = useTranslations("storePage");

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  const handleSearchInput = (value) => {
    console.log("Value changed:", value);
  };
  // const formType = itemsType === "products" ? "Product" : "Service";
  const formType = itemsType;
  console.log("aasas", formType);

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <CustomButton
          onClick={() => {
            console.log("Button 1Clicked");
            handleTypeChange("products");
          }}
          className={`${itemsType === "products" ? "dark-btn" : "light-btn"}`}
        >
          {t("upper.products")}
        </CustomButton>

        <CustomButton
          onClick={() => {
            console.log("Button2 Clicked");
            handleTypeChange("services");
          }}
          className={`${itemsType === "services" ? "dark-btn" : "light-btn"}`}
        >
          {t("upper.services")}
        </CustomButton>
      </div>

      <div className="flex gap-2">
        <SearchInput onChange={handleSearchInput} />
        <DarkButton
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          + {t("add")}
        </DarkButton>
      </div>
      <StoreDialog
        openDialog={openDialog}
        handleOpenDialog={handleOpenDialog}
        title={t("add") + " " + t(`upper.${itemsType}`)}
        formType={formType}
      />
    </div>
  );
};

export default HeadMenu;
