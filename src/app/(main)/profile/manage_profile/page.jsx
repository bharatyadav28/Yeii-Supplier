import AuthPage from "@/components/common/AuthPage";
import MainComp from "@/components/manage_profile/MainComp";
import React from "react";

const page = () => {
  return (
    <AuthPage
      showHeader={true}
      heading="Manage business profile"
      route="/profile"
    >
      <MainComp />
    </AuthPage>
  );
};

export default page;
