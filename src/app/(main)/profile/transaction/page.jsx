import AuthPage from "@/components/common/AuthPage";
import MainContent from "@/components/common/MainContent";
import MainComp from "@/components/transaction/MainComp";
import React from "react";

const page = () => {
  return (
    <AuthPage showHeader={true} heading="My Transaction" route="/profile">
      <MainContent>
        <MainComp />
      </MainContent>
    </AuthPage>
  );
};

export default page;
