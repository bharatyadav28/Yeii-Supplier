"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import MainContent from "../common/MainContent";
import CouponList from "./CouponList";
import CustomHeader from "./CustomHeader";
import ViewCoupon from "./ViewCoupon";
import DeleteDialog from "../common/DeleteDialog";

const MainComp = () => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [Id, setId] = useState(null);
  const [title, setTitle] = useState("");

  const t = useTranslations("profilePage");

  const [dialogStates, setDialogStates] = useState({
    isView: false,
    isEdit: false,
    isCreate: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    discount: "",
    discounted_price: "",
    description: "",
    expiry_date: "",
    usage_limit: "",
  });

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleOpenDelete = () => {
    setOpenDelete((prev) => !prev);
  };

  const handleFormData = (data) => {
    setFormData(data);
  };

  const submitHandler = () => {
    if (dialogStates.isCreate) {
      // will hit create new coupon API
      console.log("new coupon", Id);
      console.log(formData);
    } else if (dialogStates.isEdit) {
      // will hit edit coupon API
      console.log("Edit coupon", Id);
      console.log(formData);
    } else {
      // nothing to do with the view mode submittion
      console.log("Details", Id);
      console.log(formData);
    }
    setOpen(false);
  };

  const handleCreate = () => {
    setId(null);
    setOpen(true);
    setDialogStates({
      isView: false,
      isEdit: false,
      isCreate: true,
    });
    setFormData({
      name: "",
      discount: "",
      discounted_price: "",
      description: "",
      expiry_date: "",
      usage_limit: "",
    });
    setTitle("create_new_coupon");
  };

  const handleClick = (coupon) => {
    setId(coupon.id);
    setOpen(true);
    setDialogStates({
      isView: true,
      isEdit: false,
      isCreate: false,
    });
    setFormData({
      name: coupon.name,
      discount: coupon.discount,
      discounted_price: coupon.discounted_price,
      description: coupon.description,
      expiry_date: coupon.expiry_date,
      usage_limit: coupon.usage_limit,
    });
    setTitle("coupon_details");
  };

  const handleEdit = (coupon) => {
    setId(() => (typeof coupon === "object" ? coupon.id : coupon));
    setOpen(true);
    setDialogStates({
      isView: false,
      isEdit: true,
      isCreate: false,
    });
    typeof coupon === "object" &&
      setFormData({
        name: coupon.name,
        discount: coupon.discount,
        discounted_price: coupon.discounted_price,
        description: coupon.description,
        expiry_date: coupon.expiry_date,
        usage_limit: coupon.usage_limit,
      });
    setTitle("edit_coupon");
  };

  const handleDelete = (id) => {
    setId(id);
    setOpenDelete(true);
  };

  const deleteCoupon = () => {
    setOpenDelete(false);
  };
  return (
    <>
      <CustomHeader
        heading={t("myCoupon")}
        route="/profile"
        handleCreate={handleCreate}
        t={t}
      />
      <MainContent
        contentTitle={t("coupons")}
        className="!overflow-hidden flex flex-col pb-0 !mb-5"
      >
        <CouponList
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleClick={handleClick}
          t={t}
        />
      </MainContent>
      <ViewCoupon
        open={open}
        handleOpen={handleOpen}
        title={t(title)}
        dialogStates={dialogStates}
        editHandler={handleEdit}
        deleteHandler={handleDelete}
        formData={formData}
        handleFormData={handleFormData}
        submitHandler={submitHandler}
        Id={Id}
        t={t}
      />
      <DeleteDialog
        openDialog={openDelete}
        handleOpenDialog={handleOpenDelete}
        title={t("delete_coupon")}
        description={t("delete_coupon_description")}
        onCancel={handleOpenDelete}
        onConfirm={deleteCoupon}
        t={t}
        // Icon={}
      />
    </>
  );
};

export default MainComp;
