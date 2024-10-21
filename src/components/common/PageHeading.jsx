import React from "react";
import AvalabilitySwitch from "./AvalabilitySwitch";
import { useTranslations } from "next-intl";

// Page heading
function PageHeading({ pageName, avalability }) {
  const t = useTranslations();
  return (
    <div className="mb-5 flex justify-between items-center">
      <h1 className="text-2xl font-medium ">
        <span className="text-[#00131F] mr-1">{t(pageName)}</span>
        <span className="text-[var(--medium-gray)]">{t("dashboard")}</span>
      </h1>
      {avalability && <AvalabilitySwitch />}
    </div>
  );
}

export default PageHeading;
