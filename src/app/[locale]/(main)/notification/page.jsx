"use client";

import { unstable_setRequestLocale } from "next-intl/server";

const StorePage = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <h1>This is Notification Page</h1>
    </div>
  );
};

export default StorePage;
