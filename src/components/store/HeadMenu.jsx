"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { CustomButton, LightButton, DarkButton } from "../common/CustomButtons";
import SearchInput from "../common/SearchInput";
import StoreDialog from "./StoreDialog";
import { useTranslations } from "next-intl";

const HeadMenu = ({ itemsType, handleTypeChange }) => {
  const t = useTranslations("storePage");

  const [openDialog, setOpenDialog] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("query");
  const [searchInput, setSearchInput] = useState(search || "");

  const handleOpenDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  const handleSearchInput = (value) => {
    console.log("Value:", value);
    setSearchInput(value);
  };
  // const formType = itemsType === "products" ? "Product" : "Service";
  const formType = itemsType;
  // console.log("aasas", formType);

  useEffect(() => {
    const id = setTimeout(() => {
      router.push(`?query=${searchInput}`);
    }, [500]);
    return () => clearTimeout(id);
  }, [searchInput]);

  // useEffect(() => {
  //   if (search && !searchInput) {
  //     setSearchInput(search);
  //   }
  // }, []);

  // console.log("Search iNput:", searchInput);

  return (
    <div className="flex justify-between flex-wrap gap-4">
      <div className="flex gap-2">
        <CustomButton
          onClick={() => {
            console.log("Button 1Clicked");
            handleTypeChange("products");
            setSearchInput("");
          }}
          className={`${itemsType === "products" ? "dark-btn" : "light-btn"}`}
        >
          {t("upper.products")}
        </CustomButton>

        <CustomButton
          onClick={() => {
            console.log("Button2 Clicked");
            handleTypeChange("services");
            setSearchInput("");
          }}
          className={`${itemsType === "services" ? "dark-btn" : "light-btn"}`}
        >
          {t("upper.services")}
        </CustomButton>
      </div>

      <div className="flex gap-2">
        <SearchInput
          onChange={handleSearchInput}
          value={searchInput}
          // className="xl:w-[18rem] w-[12rem]"
        />
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
