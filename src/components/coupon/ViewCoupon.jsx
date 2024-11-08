import { Clock, Edit, Percent, Trash } from "lucide-react";
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
    t,
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
            {t("coupon_name")}
            <span className="text-red-500">*</span>
          </div>
          <TextInput
            className="py-2 text-sm disabled:cursor-not-allowed"
            placeholder={t("coupon_name_placeholder")}
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
            {t("Coupon_description")} <span className="text-red-500">*</span>
          </div>
          <TextArea
            className="py-3 text-sm disabled:cursor-not-allowed"
            placeholder={t("coupon_description_placeholder")}
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
            <div className="my-2 text-sm">{t("discount")}</div>
            <TextInput
              divClass="py-3"
              className="text-sm !border-solid !border-l-2 pl-3 disabled:cursor-not-allowed"
              customIcon={<Percent size={15} />}
              iconClasses="!px-3"
              placeholder={t("discount_placeholder")}
              required={true}
              value={formData.discount}
              onChange={(e) =>
                handleFormData({ ...formData, discount: e.target.value })
              }
              disabled={dialogStates.isView}
            />
          </div>
          <div>
            <div className="my-2 text-sm">{t("discounted_price")}</div>
            <TextInput
              divClass="py-3"
              className="text-sm !border-solid !border-l-2 pl-3 disabled:cursor-not-allowed"
              customIcon={<span className="text-sm font-bold">MX$</span>}
              iconClasses="!px-3"
              placeholder={t("discounted_price_placeholder")}
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
            <div className="my-2 text-sm">{t("expiry_date")}</div>
            <div className="flex items-center justify-between pr-3 rounded-xl bg-white w-full ">
              <TextInput
                divClass="!mb-0 !py-3"
                className="text-sm"
                placeholder="Select expiry date"
                value={formData.expiry_date}
                onChange={(e) =>
                  handleFormData({ ...formData, expiry_date: e.target.value })
                }
                disabled={dialogStates.isView}
              />
              <DatePicker
                // className="rounded-xl border-none !py-6 w-full disabled:cursor-not-allowed"
                // title="Select expiry date"
                value={formData.expiry_date}
                onChange={(date) =>
                  handleFormData({ ...formData, expiry_date: date })
                }
                disabled={dialogStates.isView}
              >
                <button
                  // {...props}
                  // variant={"outline"}
                  // className={cn(
                  //   "w-[240px] justify-start text-left font-normal disabled:!cursor-not-allowed " +
                  //     className,
                  //   !date && "text-muted-foreground"
                  // )}
                  disabled={dialogStates.isView}
                >
                  {/* {date ? format(date, "dd/MM/yyyy") : <span>{title}</span>} */}
                  <Clock color="gray" size={18} />
                </button>
              </DatePicker>
            </div>
          </div>
          <div>
            <div className="my-2 text-sm">
              {t("usage_limit")} <span className="text-red-500">*</span>
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
            {t("cancel")}
          </LightButton>
          <DarkButton
            onClick={submitHandler}
            className={`w-full ${dialogStates.isView && "cursor-not-allowed"}`}
          >
            {dialogStates.isEdit ? t("save_changes") : t("generate_coupon")}
          </DarkButton>
        </div>
      </div>
    </CustomDialog>
  );
};

export default ViewCoupon;
