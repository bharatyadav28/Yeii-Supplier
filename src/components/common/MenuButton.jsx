"use client";

import { useState } from "react";
import { TransparentButton } from "./CustomButtons";
import ListModal from "../orders/ListModal";

const MenuButton = ({
  label,
  Icon,
  list,
  isCheckBox = false,
  iconColor,
  iconSize,
  isCoupon,
  couponEvents,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <TransparentButton
        className="text-[0.8rem] flex items-center  w-max  !py-4 !border-0  rounded-full"
        onClick={handleMenuOpen}
      >
        <div> {label}</div>
        <Icon className="ml-2" color={iconColor} size={iconSize ?? 16} />
      </TransparentButton>
      {menuOpen && (
        <ListModal
          handleOpen={handleMenuOpen}
          list={list}
          label={label}
          isCheckBox={isCheckBox}
          isCoupon={isCoupon}
          couponEvents={couponEvents}
        />
      )}
    </div>
  );
};
export default MenuButton;
