"use server";

import { cookies } from "next/headers";

const FetchRequest = async ({ path, tags, isTokenRequired = true }) => {
  let headers = {
    "Content-Type": "application/json",
  };
  if (isTokenRequired) {
    headers.Authorization = `${cookies().get("supplier_token")?.value}`;
  }

  try {
    const response = await fetch(`https://yeii-api.onrender.com${path}`, {
      method: "GET",
      headers,
      // cache: "force-cache",
      next: { revalidate: 60, tags: tags || [] },
      // cache: "no-cache",
    });

    const responseData = await response.json();
    console.log("respponse", path, responseData);

    if (!response.ok) {
      throw new Error(
        responseData?.message ||
          responseData?.errors ||
          responseData?.error?.message
      );
    }
    return { success: true, data: responseData };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getProducts = async (query) => {
  return await FetchRequest({
    path: `/store/products?query=${query}`,
  });
};

export const getOrders = async (query) => {
  const productOrders = await FetchRequest({
    path: `/supplier/get-product-order${query}`,
  });
  const serviceOrder = await FetchRequest({
    path: `/supplier/get-service-order${query}`,
  });
  console.log("Queryyyyy: ", query);

  if (productOrders.success && serviceOrder.success) {
    return {
      success: true,
      data: [...productOrders.data?.items, ...serviceOrder.data?.items],
    };
  }
};

export const getServices = async (query) => {
  return await FetchRequest({
    path: `/store/services?query=${query}`,
  });
};

// Profile pages

export const getProfile = async (query) => {
  return await FetchRequest({
    path: `/supplier/get-supplier-profile`,
    tags: ["profile"],
  });
};

export const getBusinessAvailability = async () => {
  return await FetchRequest({
    path: `/settings`,
    tags: ["business-availability"],
  });
};

export const getCoupons = async () => {
  return await FetchRequest({
    path: `/coupons`,
    tags: ["coupons"],
  });
};

// Home page
export const getAllOrders = async () => {
  const productOrders = FetchRequest({
    path: `/supplier/get-product-order`,
    tags: ["all-orders"],
  });
  const serviceOrder = FetchRequest({
    path: `/supplier/get-service-order`,
    tags: ["all-orders"],
  });

  const orders = await Promise.all([productOrders, serviceOrder]);
  return orders;
};
