"use client";

import { useRouter, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [lang, setLang] = useState(params.locale);
  // console.log({ pathname, params });
  const changeLanguage = (lang) => {
    router.push(`../${lang}/${pathname}`);
  };

  const t = useTranslations("Homepage");
  return (
    <>
      {/* <div className="m-4">{t("title")}</div> */}
      <div className="flex gap-4">
        <button
          className={`rounded-2xl px-4 py-2 ${
            lang === "en" ? "bg-[--main-gray]" : "bg-[--light-gray]"
          }`}
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className={`rounded-2xl px-4 py-2 ${
            lang === "es" ? "bg-[--main-gray]" : "bg-[--light-gray]"
          }`}
          onClick={() => changeLanguage("es")}
        >
          Español
        </button>
      </div>
    </>
  );
};

export default LanguageSwitcher;
