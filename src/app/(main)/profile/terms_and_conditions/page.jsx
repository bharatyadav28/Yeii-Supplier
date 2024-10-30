import React from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import MainContent from "@/components/common/MainContent";
import Policy from "@/components/common/Policy";

const TermsAndConditionsPage = () => {
  const t = useTranslations("profilePage");

  return (
    <AuthPage showHeader={true} heading={t("privacyPolicy")} route="/profile/">
      <MainContent className="mt-8 policy !bg-[#fff] ">
        <Policy title={t("welcomeTo")}>
          <p>{t("t1")}</p>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-[#323B41] text-[1.2rem]">
              1. {t("h1")}
            </div>
            <p>{t("t2")}</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-[#323B41] text-[1.2rem]">
              2. {t("h2")}
            </div>
            <ul className="list-disc mx-6 flex flex-col gap-1">
              <li>{t("h2u1")}</li>
              <li>{t("h2u2")}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-[#323B41] text-[1.2rem]">
              3. {t("h3")}
            </div>
            <ul className="list-disc mx-6 flex flex-col gap-1">
              <li>{t("h3u1")}</li>
              <li>{t("h3u2")}</li>
              <li>{t("h3u3")}</li>
              <li>{t("h3u4")}</li>
            </ul>
          </div>
        </Policy>
      </MainContent>
    </AuthPage>
  );
};

export default TermsAndConditionsPage;
