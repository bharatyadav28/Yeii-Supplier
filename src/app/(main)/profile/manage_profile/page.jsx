import AuthPage from "@/components/common/AuthPage";
import React from "react";

const page = () => {
  return (
    <AuthPage
      showHeader={true}
      heading="Manage business profile"
      route="/profile"
    ></AuthPage>
  );
};

export default page;
