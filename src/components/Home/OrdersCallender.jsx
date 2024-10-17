import Calendar from "../common/Calender";
import Card from "../common/Card";
import AcceptedOrderList from "./AcceptedOrderList";

const OrdersCallender = ({ orders }) => {
  return (
    <Card className="w-[500px] h-full flex flex-col bg-[url('/callenderBg.png')] bg-cover bg-center mt-4 rounded-xl">
      <Calendar />
      <AcceptedOrderList orders={orders} />
    </Card>
  );
};

export default OrdersCallender;
