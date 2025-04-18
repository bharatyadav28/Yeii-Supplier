import { useState } from "react";

import Calendar from "../common/Calender";
import Card from "../common/Card";
import AcceptedOrderList from "./AcceptedOrderList";
import { isSameDay } from "@/lib/functions";

const OrdersCallender = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filterOrders = orders?.filter((order) => {
    // return order.orderType === "product"
    //   ? true
    //   : isSameDay(order.dateForRent.startDate, selectedDate);
    return isSameDay(order.dateForRent?.startDate, selectedDate);
  });

  return (
    <Card className="min-w-[380px] self-stretch h-full pb-0 flex flex-col bg-[url('/callenderBg.png')] bg-cover bg-center rounded-xl">
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AcceptedOrderList orders={filterOrders} selectedDate={selectedDate} />
    </Card>
  );
};

export default OrdersCallender;
