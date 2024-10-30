import { useTranslations } from "next-intl";

import NewPassword from "@/components/auth/NewPassword";
import AuthPage from "@/components/common/AuthPage";
import AuthHeading from "@/components/common/AuthHeading";

const ResetPasswordPage = () => {
  const t = useTranslations("resetPage");

  return (
    <AuthPage
      route="/profile/settings"
      heading={t("reset_password")}
      showHeader={true}
      isReset={true}
    >
      <AuthHeading
        isReset={true}
        heading={t("heading")}
        className="mb-3 text-[#00131F]"
      >
        <p className="text-center text-xs text-[#6E7980]">{t("subHeading")}</p>
      </AuthHeading>
      <NewPassword />
    </AuthPage>
  );
};

export default ResetPasswordPage;
