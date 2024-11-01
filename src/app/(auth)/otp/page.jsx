import EmailCard from "@/components/auth/EmailCard";
import OtpFrom from "@/components/auth/OtpForm";
import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";
import { useTranslations } from "next-intl";

const EnterOTP = () => {
  const t = useTranslations("otpPage");

  return (
    <AuthPage route="/forgot_password" showHeader={true}>
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
