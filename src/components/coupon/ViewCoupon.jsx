import { Percent } from "lucide-react";
import CustomDialog from "../common/CustomDialog";
import { TextArea, TextInput } from "../common/customInput";

const ViewCoupon = ({ open, handleOpen, title }) => {
  return (
    <CustomDialog
      open={open}
      handleOpen={handleOpen}
      title={title}
      className="w-[600px]"
    >
      <div className="mt-3">
        <div>
          <div className="my-2 text-sm">
            Coupon name <span className="text-red-500">*</span>
          </div>
          <TextInput
            className="py-3 text-sm"
            placeholder="Enter Coupon name"
            required={true}
          />
        </div>
        <div>
          <div className="my-2 text-sm">
            Coupon Description <span className="text-red-500">*</span>
          </div>
          <TextArea
            className="py-3 text-sm"
            placeholder="Enter description"
            required={true}
          />
        </div>
        <div className="flex gap-2">
          <div className="flex-grow">
            <div className="my-2 text-sm">Discount</div>
            <TextInput
              className="py-3 text-sm !border-l-2"
              customIcon={<Percent />}
              placeholder="Enter Price"
              required={true}
            />
          </div>
          <div className="flex-grow">
            <div className="my-2 text-sm">Discounted price</div>
            <TextInput
              className="py-3 text-sm"
              placeholder="Enter Price"
              required={true}
            />
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default ViewCoupon;
