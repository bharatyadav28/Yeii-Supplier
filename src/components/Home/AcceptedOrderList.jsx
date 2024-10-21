import { useState } from "react";
import NoItems from "../common/NoItems";
import OrderItem from "../common/OrderItem";
import AcceptedOrderDetails from "../orders/AcceptedOrderDetails";

const AcceptedOrderList = ({ orders }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [order, setOrder] = useState(null);

  const handleOpen = () => {
    setOpenDialog((prev) => !prev);
  };
  const handleClick = (order) => {
    setOrder(order);
    handleOpen();
  };
  const noItemHeading = (
    <h1 className="text-center">You have no orders at this moment</h1>
  );
  const noItemSubHeading =
    "build your online store with brincos dieras and get orders.";

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
              Order id - {order.orderId}
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
