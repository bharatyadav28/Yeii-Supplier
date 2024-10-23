"use client";

import { useState } from "react";
import MainContent from "../common/MainContent";
import CouponList from "./CouponList";
import CustomHeader from "./CustomHeader";
import ViewCoupon from "./ViewCoupon";

const MainComp = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleCreate = () => {
    setOpen(true);
    setTitle("Create new coupon");
  };

  const handleClick = (id) => {
    setOpen(true);
    setTitle("Coupon details");
  };

  const handleEdit = (id) => {
    setOpen(true);
    setTitle("Edit Coupon details");
    console.log(id);
  };

  const handleDelete = (id) => {
    // setOpen(true);
    console.log(id);
  };

  return (
    <>
      <CustomHeader
        heading="My coupons"
        route="/profile"
        handleCreate={handleCreate}
      />
      <MainContent
        contentTitle="Coupons"
        className="!overflow-hidden flex flex-col pb-0"
      >
        <CouponList
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleClick={handleClick}
        />
      </MainContent>
      <ViewCoupon open={open} handleOpen={handleOpen} title={title} />
    </>
  );
};

export default MainComp;
