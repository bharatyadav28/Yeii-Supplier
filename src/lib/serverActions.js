"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const MutationRequest = async ({
  type,
  path,
  body,
  isTokenRequired = true,
}) => {
  let headers = {
    "Content-Type": "application/json",
  };
  if (isTokenRequired) {
    headers.Authorization = `${cookies().get("supplier_token")?.value}`;
  }
  // console.log("Headers:", headers);

  try {
    const response = await fetch(`https://yeii-api.onrender.com${path}`, {
      method: type,
      headers,
      body: JSON.stringify(body),
    });
    console.log("response", response);

    const responseData = await response.json();
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

export const createUser = async (submittedData) => {
  return await MutationRequest({
    type: "POST",
    path: "/auth/register",
    body: submittedData,
    isTokenRequired: false,
  });
};

export const userLogin = async (submittedData) => {
  const response = await MutationRequest({
    type: "POST",
    path: "/auth/login",
    body: submittedData,
    isTokenRequired: false,
  });

  if (response.success) {
    const token = response.data.token;

    cookies().set({
      name: "supplier_token",
      value: token,
      httpOnly: true,
    });

    return { success: true };
  }
  return response;
};

export const userLogout = async () => {
  cookies().delete("supplier_token");
};

export const sendOtp = async (email) => {
  return await MutationRequest({
    type: "POST",
    path: "/auth/send_otp",
    body: { email },
    isTokenRequired: false,
  });
};

export const verifyOtp = async ({ email, OTP }) => {
  return await MutationRequest({
    type: "POST",
    path: "/auth/verify_otp",
    body: { email, OTP, type: "supplier" },
    isTokenRequired: false,
  });
};

export const resetPassword = async ({ email, password, confirmPassword }) => {
  return await MutationRequest({
    type: "POST",
    path: "/auth/reset_password",
    body: { email, password, confirmPassword, type: "supplier" },
    isTokenRequired: false,
  });
};

export const uploadImage = async ({ image }) => {
  console.log("Image:", image);
  return await MutationRequest({
    type: "POST",
    path: "/auth/upload-image",
    body: { image },
  });
};

export const addItem = async (item, isService = false) => {
  const path = isService ? "/store/service" : "/store/product";
  console.log("PAth: ", path);
  const response = await MutationRequest({
    type: "POST",
    path: path,
    body: item,
  });

  console.log("Add response", response);
  if (response.success) {
    revalidatePath("/store");
  }
  return response;
};

export const updateItem = async ({ id, item, isService = false }) => {
  const path = isService ? `/store/service/${id}` : `/store/product/${id}`;

  console.log(item, isService);
  const response = await MutationRequest({
    type: "PUT",
    path: path,
    body: item,
  });

  console.log("Update response", response);
  if (response.success) {
    revalidatePath("/store");
  }
  return response;
};

export const deleteItem = async (id, isService) => {
  const path = isService ? `/store/service/${id}` : `/store/product/${id}`;
  const response = await MutationRequest({
    type: "DELETE",
    path: path,
  });
  console.log("Response:", response);
  if (response.success) {
    revalidatePath("/store");
  }
  return response;
};
