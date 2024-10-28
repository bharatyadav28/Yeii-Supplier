"use server";

import { cookies } from "next/headers";
import { getLocale } from "next-intl/server";

export const getLanguage = async () => {
  return await getLocale();
};
