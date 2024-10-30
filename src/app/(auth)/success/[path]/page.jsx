import { useTranslations } from "next-intl";

import NotFound from "@/app/not-found";
import AuthPage from "@/components/common/AuthPage";
import SuccessCard from "@/components/common/SuccessCard";

const SuccessPage = ({ params }) => {
  const { path } = params;

  const t = useTranslations("passwordChanged");

  return (
    <AuthPage>
      {path === "password_changed" ? (
        <SuccessCard
          heading={
            <h1>
              {/* Password Changed <br /> successfully */}
              {t("headingFirst")} <br /> {t("headingLast")}
            </h1>
          }
          subHeading={<p>{t("subHeading")}</p>}
          route="/"
        />
      ) : path === "account_created" ? (
        <SuccessCard
          heading={
            <h1>
              Account Created <br /> sucessfully
            </h1>
          }
          subHeading={<p>Your Account has been created sucessfully</p>}
          route="/"
        ></SuccessCard>
      ) : (
        <NotFound />
      )}
    </AuthPage>
  );
};

export default SuccessPage;
