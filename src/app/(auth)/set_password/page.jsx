import { useTranslations } from "next-intl";

import NewPassword from "@/components/auth/NewPassword";
import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";

const page = () => {
  const t = useTranslations("resetPage");

  return (
    <AuthPage route="/forgot_password" showHeader={true}>
      <AuthHeading heading={t("heading")}>
        <p className="text-center text-xs text-white">{t("subHeading")}</p>
      </AuthHeading>
      <NewPassword />
    </AuthPage>
  );
};

export default page;
