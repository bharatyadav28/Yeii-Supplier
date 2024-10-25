import React from "react";

import AuthPage from "@/components/common/AuthPage";
import MainContent from "@/components/common/MainContent";
import Policy from "@/components/common/Policy";

const TermsAndConditionsPage = () => {
  return (
    <AuthPage showHeader={true} heading="Privacy Policy" route="/profile/">
      <MainContent className="mt-8 policy !bg-[#fff] ">
        <Policy title="Welcome to">
          <p>
            These Terms of Use govern your use of the "Brincos Dieras" mobile
            application provided by us. By accessing or using the App, you agree
            to comply with and be bound by these terms. If you do not agree with
            these terms, please do not use the App
          </p>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-[#323B41] text-[1.2rem]">
              1. Acceptance of Terms
            </div>
            <p>
              By using the App, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Use. These terms may be
              updated or modified, and it is your responsibility to review them
              periodically
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-[#323B41] text-[1.2rem]">
              2. User Accounts
            </div>
            <ul className="list-disc mx-6 flex flex-col gap-1">
              <li>
                To use certain features of the App, you may be required to
                create a user account. You are responsible for maintaining the
                confidentiality of your account information and password.
              </li>
              <li>
                You agree to provide accurate and complete information when
                creating your account.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-[#323B41] text-[1.2rem]">
              3. User Conduct
            </div>
            <ul className="list-disc mx-6 flex flex-col gap-1">
              <li>When using the App, you agree not to:</li>
              <li>Violate any applicable laws or regulations.</li>
              <li>
                Infringe upon the rights of others. Post or share any harmful,
                abusive, or inappropriate content.
              </li>
              <li>
                Attempt to gain unauthorized access to other users' accounts
              </li>
            </ul>
          </div>
        </Policy>
      </MainContent>
    </AuthPage>
  );
};

export default TermsAndConditionsPage;
