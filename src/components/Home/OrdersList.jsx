import { useState } from "react";
import OrderItem from "../common/OrderItem";
import ViewOrder from "./ViewOrder";

const OrdersList = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleClick = (order) => {
    setSelectedOrder(order);
    handleOpen();
  };

  return (
    <>
      <div
        id="orders-list"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 overflow-y-auto h-full items-start pb-12 rounded-t-xl auto-rows-min"
      >
        {orders.map((order) => (
          <OrderItem key={order._id} order={order} onClick={handleClick} />
        ))}
      </div>
      <ViewOrder open={open} handleOpen={handleOpen} order={selectedOrder} />
    </>
  );
};

export default OrdersList;
