import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { useTranslations } from "next-intl";

const ForgotPassword = () => {
  const t = useTranslations("forgotPassword");
  return (
    <AuthPage route="/login" heading={t("reset_password")} showHeader={true}>
      <div>
        <AuthHeading heading={t("heading")}>
          <p className="text-center text-xs text-white max-w-[400px]">
            {t("subHeading")}
          </p>
        </AuthHeading>
        <ForgotPasswordForm />
      </div>
    </AuthPage>
  );
};
export default ForgotPassword;
