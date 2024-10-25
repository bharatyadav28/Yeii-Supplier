import React from "react";

import AuthPage from "@/components/common/AuthPage";
import MainContent from "@/components/common/MainContent";
import Policy from "@/components/common/Policy";

const SettlementPolicyPage = () => {
  return (
    <AuthPage showHeader={true} heading="Settlement Policy" route="/profile/">
      <MainContent className="mt-8 !bg-[#fff]">
        <Policy title="Settlement Policy">
          <p>
            Your use of the App is also governed by our Privacy Policy [Link to
            Privacy Policy], which outlines how we collect, use, and disclose
            your personal information.{" "}
          </p>
          <p>
            By continuing to use the "Brincos Dieras" App, you acknowledge that
            you have read, understood, and agreed to these Terms of Use. If you
            have any questions or concerns, please contact us at [Your Contact
            Information].
          </p>
          <p>
            Thank you for choosing "Brincos Dieras" to showcase your business
            ideas!
          </p>
        </Policy>
      </MainContent>
    </AuthPage>
  );
};

export default SettlementPolicyPage;
