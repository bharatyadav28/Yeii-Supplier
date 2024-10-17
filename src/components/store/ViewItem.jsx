import React from "react";

import CustomDialog from "../common/CustomDialog";
import { DarkButton, LightButton } from "../common/CustomButtons";
import { SelectInput, TextArea, TextInput } from "../common/customInput";
import DefaultItemImage from "../common/DefaultItemImage";
import { CustomCheckBox } from "../common/customInput";
import { CounterInput } from "../common/customInput";

function ViewItem({ openDialog, handleOpenDialog, item, title, formType }) {
  const isServiceType = formType === "Service";

  const actualPriceField = (
    <fieldset>
      <label htmlFor="actualPrice" className="text-[#00131FCC] required">
        Actual Price
      </label>
      <TextInput
        name="actualPrice"
        id="actualPrice"
        customIcon="MS$"
        className="!text-[0.8rem] "
        iconClasses="t-icon pl-3 !pr-0"
        defaultValue={item?.actualPrice}
      />
    </fieldset>
  );

  const startTimeField = <div className="bg-blue-500"></div>;
  const endTimeField = <div className="bg-green-500"></div>;
  const quantityField = (
    <fieldset>
      <label htmlFor="quantity" className="text-[#00131FCC] required">
        Quantity
      </label>
      <CounterInput
        name="quantity"
        id="quantity"
        defaultValue={item?.quantity}
      />
    </fieldset>
  );

  const remainingNumFields = (
    <>
      <fieldset>
        <label htmlFor="discount" className="text-[#00131FCC] required">
          Discount
        </label>
        <TextInput
          name="discount"
          id="discount"
          customIcon="%"
          iconClasses="t-icon  !pr-0 pl-3"
          placeholder="Enter price"
          defaultValue={item?.discount}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="discountedPrice" className="text-[#00131FCC] required">
          Discounted price
        </label>
        <TextInput
          name="discountedPrice"
          id="discountedPrice"
          customIcon="MS$"
          iconClasses="t-icon  pl-3 !pr-0"
          defaultValue={item?.discountedPrice}
        />
      </fieldset>
    </>
  );

  return (
    <CustomDialog
      open={openDialog}
      handleOpen={handleOpenDialog}
      title={title}
      className="w-[40rem] h-max max-h-[calc(100vh-4rem)]"
    >
      <div className="store-form mt-6">
        <div className="grid grid-cols-2 gap-4 ">
          <fieldset>
            <label htmlFor="available" className="required">
              Availability
            </label>
            <TextInput
              name="available"
              id="available"
              defaultValue={item?.availability ? "Available" : "Not Available"}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="couponEligibility" className="text-[#00131FCC]">
              Coupon Eligibility
            </label>
            <div className="flex gap-2 items-center text-[0.8rem] bg-[var(--light)] py-[0.73rem] px-3 rounded-[0.9rem] text-[var(--medium-gray)]">
              <CustomCheckBox
                className="border-[#E6E9EB] h-5 w-5"
                onChange={(val) => {
                  console.log(val);
                }}
                value={item?.couponEligibility}
              />
              <p>Is this {formType} eligible for coupons</p>
            </div>
          </fieldset>

          {isServiceType && (
            <>
              {startTimeField} {endTimeField}
            </>
          )}

          <fieldset>
            <label htmlFor="name" className="required">
              {formType} name
            </label>
            <TextInput
              name="name"
              id="name"
              required={true}
              placeholder={`Enter ${formType.toLowerCase()} name`}
              // value={isEdit ? item.name : ""}
              defaultValue={item?.name}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="cateogry" className="required">
              {formType} cateogry
            </label>
            <TextInput
              name="cateogry"
              id="cateogry"
              defaultValue={item?.category}
            />
          </fieldset>
        </div>

        <div className=" store-form">
          <fieldset>
            <label htmlFor="description" className="required">
              {formType} description{" "}
            </label>
            <TextArea
              name="description"
              id="description"
              className="min-h-[3rem] "
              placeholder="Enter  description"
              defaultValue={item?.description}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="iamges" className="required">
              {formType} Image
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
  );
}

export default ViewItem;
