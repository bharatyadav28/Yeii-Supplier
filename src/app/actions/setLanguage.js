"use server";

import { cookies } from "next/headers";

export const setLanguage = async (lang) => {
  cookies().set("language", lang);
};
