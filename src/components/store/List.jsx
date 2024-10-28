"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

import HeadMenu from "@/components/store/HeadMenu";
import MainContent from "@/components/common/MainContent";
import NoItems from "@/components/common/NoItems";
import ListItem from "@/components/store/ListItem";
import { noItemsIcon } from "@/lib/svg_icons";

function List({ products, services }) {
  const t = useTranslations("storePage");

  const [itemsType, setItemsType] = useState("products");

  const handleItemsType = (value) => setItemsType(value);

  const emptyHeading = "No items in store.";
  const emptySubHeading = (
    <p>
      You don&apos;t have any products listed in your store. You can sell
      products through the app by clicking on
      <span className="font-semibold">&quot;Add&quot; </span> to create a
      listing.
    </p>
  );

  const listData = itemsType === "products" ? products : services;
  return (
    <>
      <HeadMenu itemsType={itemsType} handleTypeChange={handleItemsType} />
      <MainContent
        contentTitle={
          itemsType === "products"
            ? t("productListTitle")
            : t("serviceListTitle")
        }
        count={listData.length}
      >
        {listData?.length === 0 ? (
          <NoItems
            icon={noItemsIcon}
            heading={emptyHeading}
            subHeading={emptySubHeading}
          />
        ) : (
          <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 ">
            {listData?.map((product) => (
              <ListItem
                key={product._id}
                item={product}
                isService={itemsType === "services"}
                t={t}
              />
            ))}
          </div>
        )}
      </MainContent>
    </>
  );
}

export default List;
