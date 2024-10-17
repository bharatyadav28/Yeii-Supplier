import NoItems from "../common/NoItems";
import OrderItem from "../common/OrderItem";

const AcceptedOrderList = ({ orders }) => {
  //   const orders = [];
  const noItemHeading = (
    <h1 className="text-center">You have no orders at this moment</h1>
  );
  const noItemSubHeading =
    "build your online store with brincos dieras and get orders.";
  return (
    <div className="flex justify-center items-center flex-grow gap-2 ">
      {orders.length === 0 ? (
        <NoItems heading={noItemHeading} subHeading={noItemSubHeading} />
      ) : (
        <div className="flex-grow flex flex-col overflow-y-auto max-h-[65vh]">
          {orders.map((order) => (
            <div key={order._id}>
              <div className="text-[10px] text-[var(--main-gray)] my-1">
                Order id - {order.orderId}
              </div>
              <OrderItem order={order} isAccepted={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AcceptedOrderList;
