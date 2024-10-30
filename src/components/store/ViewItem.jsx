import React, { useState } from "react";
import { FilePenLine as EditIcon, Trash as DeleteIcon } from "lucide-react";

import CustomDialog from "../common/CustomDialog";
import { IconButton, TextArea, TextInput } from "../common/customInput";
import DefaultItemImage from "../common/DefaultItemImage";
import { CustomCheckBox } from "../common/customInput";
import { CounterInput } from "../common/customInput";
import { Switch } from "../ui/switch";
import StoreDialog from "./StoreDialog";
import DeleteDialog from "../common/DeleteDialog";
import TimePicker from "../common/TimePicker";

function ViewItem({ openDialog, handleOpenDialog, item, title, formType, t }) {
  const isServiceType = formType === "services";
  const itemName = formType === "products" ? "product" : "service";

  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleEditDialog = () => {
    setEditDialog((prev) => !prev);
  };
  const handleDeleteDialog = () => {
    setDeleteDialog((prev) => !prev);
  };

  const actualPriceField = (
    <fieldset>
      <label htmlFor="actualPrice" className="text-[#00131FCC] ">
        {t("actualPrice")}
      </label>
      <div className=" relative">
        <TextInput
          name="actualPrice"
          id="actualPrice"
          customIcon="MS$"
          className="!text-[0.8rem] "
          iconClasses="t-icon pl-3 !pr-0"
          defaultValue={item?.actualPrice}
          disabled
        />
        {formType === "Service" && (
          <div className="bg-[#13070B0F] text-xs text-[#303F49] rounded-xl absolute top-1 right-2 p-2">
            {item.priceValidity}
          </div>
        )}
      </div>
    </fieldset>
  );

  const startTimeField = (
    <TimePicker
      title={t("startWith")}
      onTimeChange={(val) => {
        console.log("Time changed", val);
      }}
      initialTime={item?.availabilityTime?.start}
      className="!justify-start px-4"
      isViewOnly={true}
    />
  );
  const endTimeField = (
    <TimePicker
      title={t("endWith")}
      onTimeChange={(val) => {
        console.log("Time changed", val);
      }}
      initialTime={item?.availabilityTime?.end}
      className="!justify-start px-4"
      isViewOnly={true}
    />
  );
  const quantityField = (
    <fieldset>
      <label htmlFor="quantity" className="text-[#00131FCC] ">
        {t("quantity")}
      </label>
      <CounterInput
        onChange={() => console.log("nothing")}
        name="quantity"
        id="quantity"
        defaultValue={item?.quantity}
        disabled
      />
    </fieldset>
  );

  const remainingNumFields = (
    <>
      <fieldset>
        <label htmlFor="discount" className="text-[#00131FCC] ">
          {t("discount")}
        </label>
        <TextInput
          name="discount"
          id="discount"
          customIcon="%"
          iconClasses="t-icon  !pr-0 pl-3"
          placeholder="Enter price"
          defaultValue={item?.discount}
          disabled
        />
      </fieldset>
      <fieldset>
        <label htmlFor="discountedPrice" className="text-[#00131FCC] ">
          {t("discountedPrice")}
        </label>
        <TextInput
          name="discountedPrice"
          id="discountedPrice"
          customIcon="MS$"
          iconClasses="t-icon  pl-3 !pr-0"
          defaultValue={item?.discountedPrice}
          disabled
        />
      </fieldset>
    </>
  );

  const itemOptions = (
    <div className="flex gap-3">
      <IconButton
        className="bg-[var(--light-gray)]"
        onClick={() => {
          handleOpenDialog();
          handleEditDialog();
        }}
      >
        <EditIcon size={20} />
      </IconButton>
      <IconButton
        className="bg-[var(--light-gray)]"
        onClick={() => {
          handleOpenDialog();
          handleDeleteDialog();
        }}
      >
        <DeleteIcon size={20} />
      </IconButton>
    </div>
  );

  return (
    <>
      <CustomDialog
        open={openDialog}
        handleOpen={handleOpenDialog}
        title={title}
        className="w-[40rem] h-max max-h-[calc(100vh-4rem)]"
        titleRightContent={itemOptions}
      >
        <div className="store-form view-only mt-6">
          <div className="grid grid-cols-2 gap-4 ">
            <fieldset>
              <label htmlFor="available">{t("availability")}</label>
              <div className="relative">
                <TextInput
                  name="available"
                  id="available"
                  defaultValue={
                    item?.availability ? "Available" : "Not Available"
                  }
                  disabled
                />
                <span className="absolute  right-3 top-1/2  transform -translate-y-1/2 pb-1 ">
                  <Switch
                    className="data-[state=checked]:bg-[var(--main-pink)] h-[1.65rem]  disabled:opacity-100"
                    disabled
                  />
                </span>
              </div>
            </fieldset>

            <fieldset>
              <label htmlFor="couponEligibility" className="text-[#00131FCC]">
                {t("couponEligibility")}
              </label>
              <div className="flex gap-2 items-center text-[0.8rem] bg-[var(--light)] py-[0.73rem] pl-3 pr-2 rounded-[0.9rem] text-[var(--medium-gray)]">
                <CustomCheckBox
                  className="border-[#E6E9EB] h-5 w-5"
                  onChange={(val) => {
                    console.log(val);
                  }}
                  value={item?.couponEligibility}
                  disabled
                />
                <p>{t(`${formType}.coupon_text`)}</p>
              </div>
            </fieldset>

            {isServiceType && (
              <>
                <div className="flex flex-col gap-1">
                  <div className="avail  ">Availaibilty time </div>
                  {startTimeField}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="avail invisible">Availaibilty time</div>
                  {endTimeField}
                </div>
              </>
            )}

            <fieldset>
              <label htmlFor="name">
                {" "}
                {t(`upper.${itemName}`) + " " + t("image")}
              </label>
              <TextInput
                name="name"
                id="name"
                placeholder={`Enter ${formType.toLowerCase()} name`}
                // value={isEdit ? item.name : ""}
                defaultValue={item?.name}
                disabled
              />
            </fieldset>

            <fieldset>
              <label htmlFor="cateogry">
                {" "}
                {t(`upper.${itemName}`) + " " + t("category")}
              </label>
              <TextInput
                name="cateogry"
                id="cateogry"
                defaultValue={item?.category}
                disabled
              />
            </fieldset>
          </div>

          <div className=" store-form">
            <fieldset>
              <label htmlFor="description">
                {" "}
                {t(`upper.${itemName}`) + " " + t("description")}
              </label>
              <TextArea
                name="description"
                id="description"
                className="min-h-[3rem] "
                placeholder="Enter  description"
                defaultValue={item?.description}
                disabled
              />
            </fieldset>

            <fieldset>
              <label htmlFor="iamges">
                {" "}
                {t(`upper.${itemName}`) + " " + t("image")}
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
                {/* {couponEligibilityField} */}
              </>
            )}

            {isServiceType && (
              <div className="grid grid-cols-2 gap-4 num-details mt-1">
                <div>{actualPriceField}</div>
                <div className="grid grid-cols-2 gap-2 num-details">
                  {remainingNumFields}
                </div>
                {/* {couponEligibilityField} */}
              </div>
            )}
          </div>
        </div>
      </CustomDialog>

      <StoreDialog
        openDialog={editDialog}
        handleOpenDialog={handleEditDialog}
        item={item}
        title={t(`edit${formType}Details`)}
        formType={formType}
      />

      <DeleteDialog
        openDialog={deleteDialog}
        handleOpenDialog={handleDeleteDialog}
        title={t(`${formType}Delete.title`)}
        description={t(`${formType}Delete.description`)}
        onCancel={handleDeleteDialog}
        onConfirm={handleDeleteDialog}
        t={t}
      />
    </>
  );
}

export default ViewItem;
