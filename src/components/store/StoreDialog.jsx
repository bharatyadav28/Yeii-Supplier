"use client ";
import React from "react";
import { useTranslations } from "next-intl";

import CustomDialog from "../common/CustomDialog";
import { DarkButton, LightButton } from "../common/CustomButtons";
import { SelectInput, TextArea, TextInput } from "../common/customInput";
import DefaultItemImage from "../common/DefaultItemImage";
import { CustomCheckBox } from "../common/customInput";
import { CounterInput } from "../common/customInput";
import TimePicker from "../common/TimePicker";

function StoreDialog({ openDialog, handleOpenDialog, item, title, formType }) {
  const isServiceType = formType === "services";
  const isEdit = title.toLowerCase().includes("edit");

  console.log("formType:", formType);

  const t = useTranslations("storePage");

  const handleSubmit = (event) => {
    console.log("Submitted");
    event.preventDefault(); // Prevent the page from reloading

    // Access form data using event.target
    const formElements = event.target.elements;
    const name = formElements.name.value; // Access input by name
    console.log(
      "name",
      formElements.name.value,
      formElements.cateogry.value,
      formElements.discount.value
    );
  };

  const actualPriceField = (
    <fieldset>
      <label htmlFor="actualPrice" className="text-[#00131FCC] required">
        {t("actualPrice")}
      </label>
      <div className="relative">
        <TextInput
          name="actualPrice"
          id="actualPrice"
          customIcon="MS$"
          className="!text-[0.8rem] "
          iconClasses="t-icon pl-3 !pr-0 my-0"
          placeholder={t("pricePlaceholder")}
          defaultValue={item?.actualPrice}
        />
        {formType === "Service" && (
          <SelectInput
            className="!text-[0.8rem] bg-[#13070B0F] absolute right-3  !w-max top-[0.4rem] h-[2rem]  pl-4 !py-2 "
            placeholder={`Time`}
            menu={["Per Hour", "Per Day"]}
            value={item?.category}
          />
        )}
      </div>
    </fieldset>
  );

  const startTimeField = (
    <TimePicker
      title="Start with"
      onTimeChange={(val) => {
        console.log("Time changed", val);
      }}
      initialTime={item?.availabilityTime?.start}
    />
  );
  const endTimeField = (
    <TimePicker
      title="End with"
      onTimeChange={(val) => {
        console.log("Time changed", val);
      }}
      initialTime={item?.availabilityTime?.end}
    />
  );
  const quantityField = (
    <fieldset>
      <label htmlFor="quantity" className="text-[#00131FCC] required">
        {t("quantity")}
      </label>
      <CounterInput
        name="quantity"
        id="quantity"
        onChange={() => {}}
        defaultValue={item?.quantity}
      />
    </fieldset>
  );

  const remainingNumFields = (
    <>
      <fieldset>
        <label htmlFor="discount" className="text-[#00131FCC] required">
          {t("discount")}
        </label>
        <TextInput
          name="discount"
          id="discount"
          customIcon="%"
          iconClasses="t-icon  !pr-0 pl-3"
          placeholder={t("pricePlaceholder")}
          defaultValue={item?.discount}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="discountedPrice" className="text-[#00131FCC] required">
          {t("discountedPrice")}
        </label>
        <TextInput
          name="discountedPrice"
          id="discountedPrice"
          customIcon="MS$"
          iconClasses="t-icon  pl-3 !pr-0"
          placeholder={t("pricePlaceholder")}
          defaultValue={item?.discountedPrice}
        />
      </fieldset>
    </>
  );

  const couponEligibilityField = (
    <fieldset>
      <label htmlFor="couponEligibility" className="text-[#00131FCC]">
        {t("couponEligibility")}
      </label>
      <div className="flex gap-2 items-center text-[0.8rem] bg-[var(--light)] py-[0.73rem] px-3 rounded-[0.9rem] text-[var(--medium-gray)]">
        <CustomCheckBox
          className="border-[#E6E9EB] h-5 w-5"
          onChange={(val) => {
            console.log(val);
          }}
          value={item?.couponEligibility}
        />
        <p>{t("couponEligibility", { type: t(`formTypes.${formType}`) })}</p>
      </div>
    </fieldset>
  );

  return (
    <CustomDialog
      open={openDialog}
      handleOpen={handleOpenDialog}
      title={title}
      className="w-[40rem] h-max max-h-[calc(100vh-3.3rem)]"
    >
      <form onSubmit={handleSubmit} className="mt-6 store-form">
        <fieldset>
          <label htmlFor="name" className="required">
            {t("itemName", { type: t(`formTypes.${formType}`) })}
          </label>
          <TextInput
            name="name"
            id="name"
            required={true}
            placeholder={t("itemNamePlaceholder", {
              type: t(`formTypes.${formType}`),
            })}
            // value={isEdit ? item.name : ""}
            defaultValue={item?.name}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="description" className="required">
            {t("itemDescription", { type: t(`formTypes.${formType}`) })}
          </label>
          <TextArea
            name="description"
            id="description"
            className="min-h-[3rem] "
            placeholder={t("itemDescriptionPlaceholder")}
            defaultValue={item?.description}
          />
        </fieldset>

        <div className="grid grid-cols-2 gap-4 ">
          <fieldset>
            <label htmlFor="cateogry" className="required">
              {t("itemCateogry", { type: t(`formTypes.${formType}`) })}
            </label>
            <SelectInput
              name="cateogry"
              id="cateogry"
              className="!text-[0.8rem] text-[#00131fcc] pl-5 "
              placeholder={t("itemCateogryPlaceholder", {
                type: t(`formTypes.${formType}`),
              })}
              menu={["Furniture", "Electronics", "Grocery"]}
              value={item?.category}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="available" className="required">
              {t("availability")}
            </label>
            <SelectInput
              name="available"
              id="available"
              className="!text-[0.8rem] text-[#00131fcc]] pl-5"
              placeholder="Select availability"
              menu={["Yes", "No"]}
              value={item?.availability === true ? "Yes" : "No"}
            />
          </fieldset>
        </div>

        <fieldset>
          <label htmlFor="iamges" className="required">
            {t("itemImage", { type: t(`formTypes.${formType}`) })}
          </label>
          <div className=" bg-white grid rounded-[0.9rem]">
            <div className="h-[6rem] m-4 w-100 h-100  border border-[var(--main-pink)] border-dashed rounded-[0.9rem]">
              <DefaultItemImage />
            </div>
          </div>
        </fieldset>

        {!isServiceType && (
          <>
            <div className="grid grid-cols-4 gap-4 num-details mt-1">
              {actualPriceField}
              {quantityField}
              {remainingNumFields}
            </div>
            {couponEligibilityField}
          </>
        )}

        {isServiceType && (
          <>
            <div className="grid grid-cols-2 gap-4 num-details mt-2">
              <div className="flex flex-col gap-1 avail">
                <div className="required">{t("availabilityTime")}</div>
                <div className="grid grid-cols-2 gap-2 num-details">
                  {startTimeField}
                  {endTimeField}
                </div>
              </div>
              {actualPriceField}
            </div>
            <div className="grid grid-cols-2 gap-4 num-details mt-1">
              <div className="grid grid-cols-2 gap-2 num-details">
                {remainingNumFields}
              </div>
              {couponEligibilityField}
            </div>
          </>
        )}

        <div className="grid grid-cols-2 gap-2 mt-[1rem]">
          <LightButton
            className="w-100 border !border-[rgba(0, 0, 0, 0.10);
]"
            onClick={handleOpenDialog}
          >
            Close
          </LightButton>
          <DarkButton
            isSubmit={true}
            className="w-100"
            onClick={handleOpenDialog}
          >
            Save
          </DarkButton>
        </div>
      </form>
    </CustomDialog>
  );
}

export default StoreDialog;
