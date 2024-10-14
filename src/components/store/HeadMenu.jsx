"use client";

import { useState } from "react";
import { CustomButton, LightButton, DarkButton } from "../common/CustomButtons";
import SearchInput from "../common/SearchInput";

const HeadMenu = ({ itemsType, handleTypeChange }) => {
  const handleSearchInput = (value) => {
    console.log("Value changed:", value);
  };
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
          Products
        </CustomButton>

        <CustomButton
          onClick={() => {
            console.log("Button2 Clicked");
            handleTypeChange("services");
          }}
          className={`${itemsType === "services" ? "dark-btn" : "light-btn"}`}
        >
          Services
        </CustomButton>
      </div>

      <div className="flex gap-2">
        <SearchInput onChange={handleSearchInput} />
        <DarkButton
          onClick={() => {
            console.log("Button2 Clicked");
          }}
        >
          + Add
        </DarkButton>
      </div>
    </div>
  );
};

export default HeadMenu;
