"use client";

import { ListFilter } from "lucide-react";
import { useState } from "react";
import { TransparentButton } from "../common/CustomButtons";
import { getLast12Months } from "@/lib/functions";
import ListModal from "../orders/ListModal";

const MainComp = () => {
  const MenuButton = ({ label, Icon, list, isCheckBox = false }) => {
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
          <Icon className="ml-2" size={16} />
        </TransparentButton>
        {menuOpen && (
          <ListModal
            handleOpen={handleMenuOpen}
            list={list}
            label={label}
            isCheckBox={isCheckBox}
          />
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="text-lg font-semibold">Transaction</div>
        <MenuButton
          label="Filter"
          Icon={ListFilter}
          isCheckBox={true}
          list={getLast12Months()}
        />
      </div>
    </>
  );
};

export default MainComp;
