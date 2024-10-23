"use client";

import { ListFilter } from "lucide-react";
import { getLast12Months } from "@/lib/functions";
import { transactions } from "@/lib/dummyData/transactionData.json";
import TransactionList from "./TransactionList";
import MenuButton from "../common/MenuButton";

const MainComp = () => {
  const data = [];

  const today = transactions.filter((item) => item.date === "Today");
  const yesturday = transactions.filter((item) => item.date === "Yesturday");

  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="text-lg font-semibold">Transaction</div>
        <MenuButton
          label="Filter"
          Icon={ListFilter}
          isCheckBox={true}
          list={getLast12Months()}
        />
      </div>
      <div className="h-[calc(100%-40px)] overflow-y-auto">
        <TransactionList heading="Today" data={today} />
        <TransactionList heading="Yesturday" data={yesturday} />
      </div>
    </>
  );
};

export default MainComp;
