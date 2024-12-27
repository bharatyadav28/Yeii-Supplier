"use client";

import { Suspense, useState } from "react";
import { useTranslations } from "next-intl";

import MainContent from "../common/MainContent";
import CouponList from "./CouponList";
import CustomHeader from "./CustomHeader";
import ViewCoupon from "./ViewCoupon";
import DeleteDialog from "../common/DeleteDialog";
import PageLoader from "../common/PageLoader";
import {
  createCoupon,
  deleteSingleCoupon,
  updateCoupon,
} from "@/lib/serverActions";
import useHttp from "../hooks/use-http";

const MainComp = ({ couponsData }) => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [Id, setId] = useState(null);
  const [title, setTitle] = useState("");

  const t = useTranslations("profilePage");

  const { isLoading, dbConnect } = useHttp();

  const [dialogStates, setDialogStates] = useState({
    isView: false,
    isEdit: false,
    isCreate: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    discount: "",
    minimum_order_value: "",
    description: "",
    expiry_date: "",
    usage_limit: "",
    code: "",
    logo: "",
    eventName: "tik tok",
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

  const randomCouponCode = () => {
    const randomDigits = Math.floor(100 + Math.random() * 900) + 100;
    return formData.name.slice(0, 3).toUpperCase() + randomDigits.toString();
  };

  const submitHandler = async () => {
    if (isLoading) return;
    if (dialogStates.isCreate) {
      // will hit create new coupon API

      formData.code = randomCouponCode();
      await dbConnect(createCoupon.bind(null, formData));
    } else if (dialogStates.isEdit) {
      // will hit edit coupon API

      formData.code = randomCouponCode();
      await dbConnect(updateCoupon.bind(null, formData, Id));
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
      minimum_order_value: "",
      description: "",
      expiry_date: "",
      usage_limit: "",
      code: "",
      logo: "",
      eventName: "tik tok",
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
      minimum_order_value: coupon.minimum_order_value,
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
        minimum_order_value: coupon.minimum_order_value,
        description: coupon.description,
        expiry_date: coupon.expiry_date,
        usage_limit: coupon.usage_limit,
      });
    setTitle("edit_coupon");
  };

  const handleDelete = async (id) => {
    setId(id);
    setOpenDelete(true);
  };

  const deleteCoupon = async () => {
    if (isLoading) {
      return;
    }
    await dbConnect(deleteSingleCoupon.bind(null, Id));
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
        <Suspense fallback={<PageLoader />}>
          <CouponList
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleClick={handleClick}
            t={t}
            couponsData={couponsData}
          />
        </Suspense>
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
        isLoading={isLoading}
      />
      <DeleteDialog
        openDialog={openDelete}
        handleOpenDialog={handleOpenDelete}
        title={t("delete_coupon")}
        description={t("delete_coupon_description")}
        onCancel={handleOpenDelete}
        onConfirm={deleteCoupon}
        t={t}
        isDeleting={isLoading}

        // Icon={}
      />
    </>
  );
};

export default MainComp;
