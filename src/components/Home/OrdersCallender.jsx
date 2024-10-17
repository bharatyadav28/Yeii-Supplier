import Calendar from "../common/Calender";
import Card from "../common/Card";
import AcceptedOrderList from "./AcceptedOrderList";

const OrdersCallender = ({ orders }) => {
  return (
    <Card className="min-w-[380px] self-stretch h-full pb-0 flex flex-col bg-[url('/callenderBg.png')] bg-cover bg-center rounded-xl">
      <Calendar />
      <AcceptedOrderList orders={orders} />
    </Card>
  );
};

export default OrdersCallender;
