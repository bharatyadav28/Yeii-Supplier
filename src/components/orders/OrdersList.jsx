"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ChevronDown, ListFilter } from "lucide-react";
import { useTranslations } from "next-intl";

import MainContent from "../common/MainContent";
import NoItems from "../common/NoItems";
import { noOrdersIcon } from "@/lib/svg_icons";
import SearchInput from "../common/SearchInput";
import OrdersListItem from "./OrdersListItem";
import { TransparentButton } from "../common/CustomButtons";
import ListModal from "./ListModal";
import { convertToDate, debounce, useGetLast12Months } from "@/lib/functions";
import { useRouter } from "next/navigation";
import { getOrders } from "@/lib/fetchData";
import LoadingSpinner from "../common/LoadingSpinner";

const MenuButton = ({ label, Icon, list, isCheckBox = false, t, setValue }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <TransparentButton
        className="text-[0.8rem] flex items-center  w-max  !py-4 !border-0  rounded-full"
        onClick={handleMenuOpen}
      >
        <div> {label}</div>
        <Icon className="ml-2" size={16} />
      </TransparentButton>
      {menuOpen && (
        <ListModal
          handleOpen={handleMenuOpen}
          list={list}
          label={label}
          isCheckBox={isCheckBox}
          t={t}
          setValue={setValue}
        />
      )}
    </div>
  );
};
function OrdersList({ ordersData }) {
  const t = useTranslations("orderDetails");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState([]);
  const [isLocading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  const { months } = useGetLast12Months();

  const emptyHeading = "You have no orders at this moment";
  const emptySubHeading = (
    <p>Build your online store with Brincos dieras and get orders.</p>
  );

  const incomingData = ordersData;
  const data = incomingData?.data;
  const router = useRouter();
  console.log("incoming data", incomingData);

  // const fetchData = async (search, sortBy, filter) => {
  //   setIsLoading(true);
  //   const orders = await getOrders(search, sortBy, filter);
  //   setData(orders?.data);
  //   setIsLoading(false);
  // };

  // const debounceFetchData = useMemo(() => debounce(fetchData, 500), fetchData);

  // useEffect(() => {
  //   debounceFetchData(search, sortBy, filter);
  // }, [search, sortBy, filter]);

  console.log("data", data);

  const sortedData = data?.reduce((acc, order) => {
    const createdAt = order.createdAt;
    const dateString = convertToDate(createdAt);

    if (dateString) {
      if (!acc[dateString]) {
        acc[dateString] = [];
      }
      acc[dateString].push(order);
    }

    return acc;
  }, {});

  console.log("Sorted date", sortedData);

  const isEmpty = data?.length === 0;

  let query = "?";
  if (search) query += `search=${search}&`;
  if (sortBy) query += `sortBy=${sortBy}&`;

  useEffect(() => {
    const id = setTimeout(() => {
      router.push(query);
    }, [500]);
    return () => clearTimeout(id);
  }, [search]);

  useEffect(() => {
    if (sortBy) {
      router.push(query);
    }
  }, [sortBy]);

  return (
    <MainContent
      className="!overflow-hidden flex flex-col pb-0"
      contentTitle={t("MyOrders")}
      count={data?.length || 0}
    >
      <div className="flex gap-4 mt-4 items-center pb-2">
        <SearchInput
          className="bg-[var(--light)] rounded-full py-4 border-none"
          onChange={(data) => {
            setSearch(data);
          }}
          value={search}
        />

        <MenuButton
          label={t("filter")}
          Icon={ListFilter}
          isCheckBox={true}
          list={months}
          t={t}
          setValue={(value) => {
            setFilter(value);
          }}
        />
        <MenuButton
          label={t("sortBy")}
          Icon={ChevronDown}
          list={[
            t("order_accepted"),
            t("order_shipped"),
            t("cancelled"),
            t("out_for_delivery"),
            t("delivered"),
          ]}
          t={t}
          setValue={(value) => setSortBy(value)}
        />
      </div>
      {isEmpty ? (
        <NoItems
          icon={noOrdersIcon}
          heading={emptyHeading}
          subHeading={emptySubHeading}
        />
      ) : (
        sortedData &&
        Object?.keys(sortedData)?.map((d) => (
          <div className="overflow-y-auto rounded-t-xl pb-4">
            <div className="flex items-center w-full text-center">
              {/* Left line: Dark on the right, fades to the left */}
              <div className="flex-grow h-px bg-gradient-to-l from-gray-400 to-transparent"></div>

              {/* Text */}
              <span className="px-4 text-[var(--main-pink)] my-2 text-sm">
                {/* {t("today")} */}
                {d}
              </span>

              {/* Right line: Dark on the left, fades to the right */}
              <div className="flex-grow h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  mt-2 ">
              {sortedData[d]?.map((order) => (
                <OrdersListItem
                  key={order._id}
                  order={order}
                  onClick={() => {}}
                  isOrderPage={true}
                  t={t}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </MainContent>
  );
}

export default OrdersList;
