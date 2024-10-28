import { useState } from "react";
import NoItems from "../common/NoItems";
import OrderItem from "../common/OrderItem";
import AcceptedOrderDetails from "../orders/AcceptedOrderDetails";
import { useTranslations } from "next-intl";

const AcceptedOrderList = ({ orders }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [order, setOrder] = useState(null);
  const t = useTranslations("homepage");

  const handleOpen = () => {
    setOpenDialog((prev) => !prev);
  };
  const handleClick = (order) => {
    setOrder(order);
    handleOpen();
  };
  const noItemHeading = (
    <h1 className="text-center">{t("no_orders_heading")}</h1>
  );
  const noItemSubHeading = t("no_orders_subHeading");

  return orders.length === 0 ? (
    <div className="flex-grow flex justify-center items-center gap-2">
      <NoItems heading={noItemHeading} subHeading={noItemSubHeading} />
    </div>
  ) : (
    <>
      <div className="flex-grow flex flex-col overflow-y-auto h-full pb-4">
        {orders.map((order) => (
          <div key={order._id}>
            <div className="text-[10px] text-[var(--main-gray)] my-1">
              {t("order_id")} - {order.orderId}
            </div>
            <OrderItem onClick={handleClick} order={order} isAccepted={true} />
          </div>
        ))}
      </div>
      <AcceptedOrderDetails
        openDialog={openDialog}
        handleOpenDialog={handleOpen}
        order={order}
      />
    </>
  );
};

export default AcceptedOrderList;
