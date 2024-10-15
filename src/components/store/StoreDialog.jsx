import React from "react";

import CustomDialog from "../common/CustomDialog";
import { DarkButton, LightButton } from "../common/CustomButtons";
import { SelectInput, TextArea, TextInput } from "../common/customInput";
import DefaultItemImage from "../common/DefaultItemImage";
import { CustomCheckBox } from "../common/customInput";

function StoreDialog({ openDialog, handleOpenDialog, item }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from reloading

    // Access form data using event.target
    const formElements = event.target.elements;
    const name = formElements.name.value; // Access input by name
    console.log("name", name);
  };
  return (
    <CustomDialog
      open={openDialog}
      handleOpen={handleOpenDialog}
      title={`Edit Products `}
      className="w-[40rem] h-[calc(100vh-5rem)]"
    >
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name" className="text-[#00131FCC]">
            Product name
          </label>
          <TextInput name="name" id="name" className="!text-[0.9rem] " />
        </fieldset>

        <fieldset>
          <label htmlFor="description" className="text-[#00131FCC]">
            Product description
          </label>
          <TextArea
            name="description"
            id="description"
            className="!text-[0.9rem] "
          />
        </fieldset>

        <div className="grid grid-cols-2 gap-2">
          <fieldset>
            <label htmlFor="cateogry" className="text-[#00131FCC]">
              Product cateogry
            </label>
            <SelectInput
              name="cateogry"
              id="cateogry"
              className="!text-[0.9rem] w-100"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="available" className="text-[#00131FCC]">
              Availability
            </label>
            <SelectInput
              name="available"
              id="available"
              className="!text-[0.9rem] w-100 "
            />
          </fieldset>
        </div>

        <div className="h-[10rem] bg-white grid ">
          <div className="m-4 w-100 h-100  border border-[var(--main-pink)] border-dashed">
            <DefaultItemImage />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <fieldset>
            <label htmlFor="actualPrice" className="text-[#00131FCC]">
              Actual Price
            </label>
            <TextInput
              name="actualPrice"
              id="actualPrice"
              customIcon="MS$"
              className="!text-[0.9rem] "
            />
          </fieldset>
          <fieldset>
            <label htmlFor="name" className="text-[#00131FCC]">
              Quantity
            </label>
            <TextInput
              name="name"
              id="name"
              customIcon="$"
              className="!text-[0.9rem] "
            />
          </fieldset>
          <fieldset>
            <label htmlFor="discount" className="text-[#00131FCC]">
              Discount
            </label>
            <TextInput
              name="discount"
              id="discount"
              customIcon="%"
              className="!text-[0.9rem] "
            />
          </fieldset>
          <fieldset>
            <label htmlFor="discountedPrice" className="text-[#00131FCC]">
              Discounted price
            </label>
            <TextInput
              name="discountedPrice"
              id="discountedPrice"
              customIcon="MS$"
              className="!text-[0.9rem]  "
            />
          </fieldset>
        </div>

        <fieldset className="bg-[var(--light)]">
          <label htmlFor="couponEligibility" className="text-[#00131FCC]">
            Coupon Eligibility
          </label>
          <CustomCheckBox title="Is this product eligible for coupons" />
        </fieldset>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          <LightButton
            className="w-100 border !border-[rgba(0, 0, 0, 0.10);
]"
            onClick={handleOpenDialog}
          >
            Close
          </LightButton>
          <DarkButton className="w-100" onClick={handleOpenDialog}>
            Save
          </DarkButton>
        </div>
      </form>
    </CustomDialog>
  );
}

export default StoreDialog;
