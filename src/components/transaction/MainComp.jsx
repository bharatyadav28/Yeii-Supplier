"use client";

import { ListFilter } from "lucide-react";
import { useTranslations } from "next-intl";

import { getLast12Months } from "@/lib/functions";
import transactionData from "@/lib/dummyData/transactionData.json";
import TransactionList from "./TransactionList";
import MenuButton from "../common/MenuButton";

const MainComp = () => {
  const { transactions } = transactionData;

  const t = useTranslations("profilePage");

  const today = transactions.filter((item) => item.date === "Today");
  const yesturday = transactions.filter((item) => item.date === "Yesturday");

  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="text-lg font-semibold">{t("transaction")}</div>
        <MenuButton
          label={t("filter")}
          Icon={ListFilter}
          isCheckBox={true}
          list={getLast12Months()}
          t={t}
        />
      </div>
      <div className="h-[calc(100%-40px)] overflow-y-auto">
        <TransactionList heading={t("today")} data={today} />
        <TransactionList heading={t("yesterday")} data={yesturday} />
      </div>
    </>
  );
};

export default MainComp;
