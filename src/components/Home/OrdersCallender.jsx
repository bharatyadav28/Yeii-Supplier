import { useState } from "react";

import Calendar from "../common/Calender";
import Card from "../common/Card";
import AcceptedOrderList from "./AcceptedOrderList";

const OrdersCallender = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  console.log("Selected date: ", selectedDate);
  return (
    <Card className="min-w-[380px] self-stretch h-full pb-0 flex flex-col bg-[url('/callenderBg.png')] bg-cover bg-center rounded-xl">
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AcceptedOrderList orders={orders} />
    </Card>
  );
};

export default OrdersCallender;
