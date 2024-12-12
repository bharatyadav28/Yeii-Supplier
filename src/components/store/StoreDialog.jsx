"use client ";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import toast from "react-hot-toast";

import CustomDialog from "../common/CustomDialog";
import { DarkButton, LightButton } from "../common/CustomButtons";
import { SelectInput, TextArea, TextInput } from "../common/customInput";
import DefaultItemImage from "../common/DefaultItemImage";
import { CustomCheckBox } from "../common/customInput";
import { CounterInput } from "../common/customInput";
import TimePicker from "../common/TimePicker";
import { addItem, updateItem } from "@/lib/serverActions";
import LoadingSpinner from "../common/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { isNumberInput } from "@/lib/functions";

// Add or edit product or service
function StoreDialog({ openDialog, handleOpenDialog, item, title, formType }) {
  const t = useTranslations("storePage");

  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState(true);
  const [couponEligibility, setCouponEligibility] = useState(false);
  const [startTime, setStartTime] = useState("12:00 AM");
  const [endTime, setEndTime] = useState("12:00 AM");
  const [priceValidity, setPriceValidity] = useState(t("per_day"));
  const [allImages, setAllImages] = useState([]);

  const { isLoading: isSubmitting, dbConnect } = useHttp();
  const isServiceType = formType === "services";
  const locale = useLocale();
  const isEdit = title.toLowerCase().includes("edit");

  // initialise data for edit
  useEffect(() => {
    if (item && isEdit) {
      if (isServiceType) {
        setCouponEligibility(item.couponEligibility);
        setStartTime(item.availabilityTime?.startTime);
        setEndTime(item.availabilityTime?.endTime);
        setPriceValidity(item.priceValidity);
      } else {
        setCouponEligibility(item.couponEligibility);
      }
      setCategory(item.category);
      setAvailability(item.availability);
      setAllImages(item.images);
    }
  }, [item, isServiceType]);

  const itemName = formType === "products" ? "product" : "service";

  // Handle product or service submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElements = event.target.elements;

    // Form field vaildations
    let errorMessage = "";
    if (!category) {
      errorMessage = "Please select a category";
    }

    if (!isNumberInput(formElements.actualPrice.value)) {
      errorMessage = "Please enter a valid actual price";
    }
    if (!isNumberInput(formElements.discount.value)) {
      errorMessage = "Please enter a valid discount";
    }
    if (!isNumberInput(formElements.discountedPrice.value)) {
      errorMessage = "Please enter a valid discounted price";
    }

    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    let productData = {
      name: formElements.name.value,
      description: formElements.description.value,
      category: category,
      availability: availability,
      images: allImages,
      actualPrice: Number(formElements.actualPrice.value),
      discount: Number(formElements.discount.value),
      discountedPrice: Number(formElements.discountedPrice.value),
      couponEligibility: couponEligibility,
    };

    if (isServiceType) {
      if (startTime === endTime) {
        toast.error("Start time and end time should be different");
        return;
      }
      productData.availabilityTime = {
        startTime: startTime,
        endTime: endTime,
      };
      productData.rentPeriod = priceValidity;
      // productData.priceValidity = "Valid until 2024-12-31";
    } else {
      productData.quantity = formElements.quantity.value;
    }

    // Submit data
    let response = { success: false, message: "Something went wrong" };
    if (isEdit) {
      response = await dbConnect(
        updateItem.bind(null, {
          id: item.id,
          item: productData,
          isService: isServiceType,
        })
      );
    } else {
      response = await dbConnect(
        addItem.bind(null, productData, isServiceType)
      );
    }

    // Handle response success
    if (response.success) {
      toast.success(response?.data?.message);

      // Reset form
      !isEdit && setCategory("");
      setAvailability(true);
      setCouponEligibility(false);
      setStartTime("12:00 AM");
      setEndTime("12:00 AM");
      setAllImages([]);
      handleOpenDialog();
    }
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
          customIcon="MX$"
          className="!text-[0.8rem] "
          iconClasses={`t-icon ${locale === "en" ? "pl-3" : "pl-2"} !pr-0 my-0`}
          placeholder={t("pricePlaceholder")}
          defaultValue={item?.actualPrice}
          containerClass="pr-1"
          required={true}
        />
        {formType === "services" && (
          <div className="absolute top-[0.35rem] right-0">
            <SelectInput
              className="!text-[0.8rem] bg-[#13070B0F] px-3 rounded-md   !w-max  h-[2rem]    "
              placeholder={t(`time`)}
              menu={[t("per_hour"), t("per_day")]}
              value={priceValidity}
              onChange={(val) => setPriceValidity(val)}
            />
          </div>
        )}
      </div>
    </fieldset>
  );

  const startTimeField = (
    <TimePicker
      title={t("startWith")}
      onTimeChange={(val) => setStartTime(val)}
      initialTime={startTime}
      containerClasses={locale === "es" ? "!gap-2" : ""}
    />
  );
  const endTimeField = (
    <TimePicker
      title={t("endWith")}
      onTimeChange={(val) => {
        setEndTime(val);
      }}
      initialTime={endTime}
      containerClasses={locale === "es" ? "!gap-2" : ""}
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
        value={item?.quantity}
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
          iconClasses={`t-icon ${
            locale === "en" ? "pl-3" : "pl-[0.7rem]"
          } !pr-0 my-0`}
          placeholder={t("pricePlaceholder")}
          defaultValue={item?.discount}
          containerClass="!pr-2"
          required={true}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="discountedPrice" className="text-[#00131FCC] required">
          {t("discountedPrice")}
        </label>
        <TextInput
          name="discountedPrice"
          id="discountedPrice"
          customIcon="MX$"
          iconClasses={`t-icon ${locale === "en" ? "pl-3" : "pl-2"} !pr-0 my-0`}
          placeholder={t("pricePlaceholder")}
          defaultValue={item?.discountedPrice}
          containerClass="pr-1"
          required={true}
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
            setCouponEligibility(val);
          }}
          value={couponEligibility}
        />
        <p>{t(`${formType}.coupon_text`)}</p>
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
            {t(`upper.${itemName}`) + " " + t("name")}
          </label>
          <TextInput
            name="name"
            id="name"
            required={true}
            placeholder={t(`${formType}.name_placeholder`)}
            // value={isEdit ? item.name : ""}
            defaultValue={item?.name}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="description" className="required">
            {t(`upper.${itemName}`) + " " + t("description")}
          </label>
          <TextArea
            name="description"
            id="description"
            className="min-h-[3rem] "
            placeholder={t("desc_placeholder")}
            defaultValue={item?.description}
            required={true}
          />
        </fieldset>

        <div className="grid grid-cols-2 gap-4 ">
          <fieldset>
            <label htmlFor="cateogry" className="required">
              {t(`upper.${itemName}`) + " " + t("category")}
            </label>
            <SelectInput
              name="cateogry"
              id="cateogry"
              className="!text-[0.8rem] text-[#00131fcc] pl-5 "
              placeholder={t(`${formType}.cate_placeholder`)}
              menu={["Furniture", "Electronics", "Grocery"]}
              value={category}
              onChange={(value) => setCategory(value)}
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
              placeholder={t("select_availability")}
              menu={[t("yes"), t("no")]}
              value={availability ? t("yes") : t("no")}
              onChange={(value) => setAvailability(value === t("yes"))}
            />
          </fieldset>
        </div>

        <fieldset>
          <label htmlFor="iamges" className="required">
            {t(`upper.${itemName}`) + " " + t("image")}
          </label>
          <div className=" bg-white grid rounded-[0.9rem]">
            <div className="h-[6rem] m-4 w-100 h-100  border border-[var(--main-pink)] border-dashed rounded-[0.9rem]">
              <DefaultItemImage
                allImages={allImages}
                setAllImages={setAllImages}
              />
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
            {t("close")}
          </LightButton>
          <DarkButton
            isSubmit={true}
            className={`w-100 ${isSubmitting ? "cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
            // className={"w-100"+isSubmitting?"cursor-not-allowed":""}
          >
            {isSubmitting ? <LoadingSpinner /> : t("save")}
          </DarkButton>
        </div>
      </form>
    </CustomDialog>
  );
}

export default StoreDialog;
