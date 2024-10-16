import Calendar from "../common/Calender";
import Card from "../common/Card";

const OrdersCallender = () => {
  return (
    <Card className="w-[500px] h-full  bg-[url('/callenderBg.png')] bg-cover bg-center mt-4 rounded-xl">
      <Calendar />
    </Card>
  );
};

export default OrdersCallender;
