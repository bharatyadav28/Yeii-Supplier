import { Edit, Percent, Trash } from "lucide-react";
import CustomDialog from "../common/CustomDialog";
import { CounterInput, TextArea, TextInput } from "../common/customInput";
import { useState } from "react";
import { DarkButton, LightButton } from "../common/CustomButtons";
import { DatePicker } from "../common/DatePicker";

const ViewCoupon = (props) => {
  const {
    open,
    handleOpen,
    title,
    dialogStates,
    formData,
    handleFormData,
    submitHandler,
    Id,
  } = props;
  const [counterValue, setCounterValue] = useState(0);

  // console.log(formData);

  const titleRightContent = (
    <div className="flex gap-4 items-center">
      <button onClick={() => props.editHandler(Id)}>
        <Edit size={16} color="#303F49" />
      </button>
      <button onClick={() => props.deleteHandler(Id)}>
        <Trash size={16} color="#303F49" />
      </button>
    </div>
  );

  return (
    <CustomDialog
      open={open}
      handleOpen={handleOpen}
      title={title}
      className="w-[600px]"
      titleRightContent={dialogStates.isView && titleRightContent}
    >
      <div className="mt-3">
        <div>
          <div className="my-2 text-sm">
            Coupon name <span className="text-red-500">*</span>
          </div>
          <TextInput
            className="py-2 text-sm disabled:cursor-not-allowed"
            placeholder="Enter Coupon name"
            required={true}
            value={formData.name}
            onChange={(e) =>
              handleFormData({ ...formData, name: e.target.value })
            }
            disabled={dialogStates.isView}
          />
        </div>
        <div>
          <div className="my-2 text-sm">
            Coupon Description <span className="text-red-500">*</span>
          </div>
          <TextArea
            className="py-3 text-sm disabled:cursor-not-allowed"
            placeholder="Enter description"
            required={true}
            value={formData.description}
            onChange={(e) =>
              handleFormData({ ...formData, description: e.target.value })
            }
            disabled={dialogStates.isView}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="my-2 text-sm">Discount</div>
            <TextInput
              divClass="py-3"
              className="text-sm !border-solid !border-l-2 pl-3 disabled:cursor-not-allowed"
              customIcon={<Percent size={15} />}
              iconClasses="!px-3"
              placeholder="Enter Price"
              required={true}
              value={formData.discount}
              onChange={(e) =>
                handleFormData({ ...formData, discount: e.target.value })
              }
              disabled={dialogStates.isView}
            />
          </div>
          <div>
            <div className="my-2 text-sm">Discounted price</div>
            <TextInput
              divClass="py-3"
              className="text-sm !border-solid !border-l-2 pl-3 disabled:cursor-not-allowed"
              customIcon={<span className="text-sm font-bold">MX$</span>}
              iconClasses="!px-3"
              placeholder="Enter Price"
              required={true}
              value={formData.discounted_price}
              onChange={(e) =>
                handleFormData({
                  ...formData,
                  discounted_price: e.target.value,
                })
              }
              disabled={dialogStates.isView}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="my-2 text-sm">Exipy Date</div>
            <DatePicker
              className="rounded-xl border-none !py-6 w-full disabled:cursor-not-allowed"
              title="Select expiry date"
              value={formData.expiry_date}
              onChange={(date) =>
                handleFormData({ ...formData, expiry_date: date })
              }
              disabled={dialogStates.isView}
            />
          </div>
          <div>
            <div className="my-2 text-sm">
              Usage Limits for Users <span className="text-red-500">*</span>
            </div>
            <CounterInput
              onChange={(limit) =>
                handleFormData({ ...formData, usage_limit: limit })
              }
              value={formData.usage_limit}
              className="!py-6 !h-0 disabled:cursor-not-allowed"
              disabled={dialogStates.isView}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 my-3">
          <LightButton
            onClick={handleOpen}
            className="w-full border-[1px] hover:!bg-black/10 duration-300"
          >
            Cancel
          </LightButton>
          <DarkButton
            onClick={submitHandler}
            className={`w-full ${dialogStates.isView && "cursor-not-allowed"}`}
          >
            {dialogStates.isEdit ? "Save Changes" : "Generate coupon"}
          </DarkButton>
        </div>
      </div>
    </CustomDialog>
  );
};

export default ViewCoupon;
