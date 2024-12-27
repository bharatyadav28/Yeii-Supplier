"use client";
import { Suspense } from "react";
import { useTranslations } from "next-intl";

import EmailCard from "@/components/auth/EmailCard";
import OtpFrom from "@/components/auth/OtpForm";
import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";
import { useSelector } from "react-redux";

const EnterOTP = () => {
  const t = useTranslations("otpPage");

  const { isSignup } = useSelector((state) => state.unauthUser);

  const backPath = isSignup ? "/signup" : "/forgot_password";
  return (
    <AuthPage route={backPath} showHeader={true}>
      <div>
        <AuthHeading heading={t("heading")}>
          <p className="text-center text-xs text-white max-w-[400px]">
            {t("subHeading")}
          </p>
        </AuthHeading>
        <div className="flex flex-col gap-5">
          <EmailCard />
          <OtpFrom />
        </div>
      </div>
    </AuthPage>
  );
};

export default EnterOTP;
