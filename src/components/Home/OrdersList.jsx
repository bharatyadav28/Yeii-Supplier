import OrderItem from "../common/OrderItem";

const OrdersList = ({ orders }) => {
  return (
    <div
      id="orders-list"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 overflow-y-auto max-h-[80vh] "
    >
      {orders.map((order) => (
        <OrderItem key={order._id} order={order} />
      ))}
    </div>
  );
};

export default OrdersList;
