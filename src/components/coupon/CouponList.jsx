import couponsData from "@/lib/dummyData/couponData.json";
import { EllipsisVertical } from "lucide-react";
import MenuButton from "../common/MenuButton";
const CouponList = ({ handleDelete, handleEdit, handleClick }) => {
  const { coupons } = couponsData;
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-2 pt-1 pb-3 overflow-y-auto">
      {coupons.map((coupon) => (
        <div key={coupon.id} className="p-3 bg-white rounded-2xl ">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">{coupon.name}</div>
            <MenuButton
              Icon={EllipsisVertical}
              iconColor="gray"
              iconSize={22}
              isCoupon={true}
              couponEvents={{
                handleDelete: () => handleDelete(coupon.id),
                handleEdit: () => handleEdit(coupon),
              }}
            />
          </div>
          <div
            onClick={() => handleClick(coupon)}
            className="flex flex-col gap-3 cursor-pointer"
          >
            <div className="inline-block self-start text-sm text-[var(--lightblue)] border-[1px] rounded-lg p-1 px-6 ">
              {coupon.code}
            </div>
            <div className="border-dashed border-b-2"></div>
            <div className="flex justify-between text-[10px] text-[var(--main-gray)]">
              <div>
                <span className="text-black font-semibold">
                  {coupon.discount}%
                </span>{" "}
                discount on this coupon
              </div>
              <div>Expiry on {coupon.expiry_date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouponList;
