"use server";
import { cookies } from "next/headers";

const MutationRequest = async ({
  type,
  path,
  body,
  isTokenRequired = true,
}) => {
  let headers = {
    "Content-Type": "application/json",
  };
  //   if (isTokenRequired) {
  //   }

  try {
    const response = await fetch(`https://yeii-api.onrender.com${path}`, {
      method: type,
      headers,
      body: JSON.stringify(body),
    });
    console.log("response", response);
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData?.message || responseData?.errors);
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
    console.log("token", token);
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
  console.log("logout");
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
    body: { email, OTP },
    isTokenRequired: false,
  });
};
