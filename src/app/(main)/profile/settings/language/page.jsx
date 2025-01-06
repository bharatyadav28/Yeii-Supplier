"use client";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import { Button } from "@/components/ui/button";
import { setLanguage } from "@/app/actions/setLanguage";
import { useEffect, useState } from "react";
import { getLanguage } from "@/app/actions/getLanguage";
import useHttp from "@/components/hooks/use-http";
import { switchLanguage } from "@/lib/serverActions";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const LanguagePage = () => {
  const t = useTranslations("profilePage");
  const { dbConnect, isLoading } = useHttp();

  const [lang, setLang] = useState("en");
  const btnClasses =
    "w-full  rounded-xl flex justify-between bg-[#fff] text-[#323B41] font-semibold !py-8 hover:bg-slate-100 transition ";

  const onClick = async (lang) => {
    const response = await dbConnect(switchLanguage.bind(null, lang));

    if (!response.success) {
      return;
    }

    setLanguage(lang);
    setLang(lang);
  };

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const language = await getLanguage();
        setLang(language);
      } catch (error) {
        console.error("Failed to fetch language:", error);
      }
    };

    fetchLanguage();
  }, []);

  console.log(lang);
  return (
    <AuthPage
      showHeader={true}
      heading={t("language")}
      route="/profile/settings"
    >
      <div className="flex flex-col mt-6 bg-[var(--light)] mb-auto w-full rounded-xl bg-[#fff]">
        <Button onClick={() => onClick("en")} className={btnClasses}>
          <div>English</div>
          <div>
            {lang === "en" &&
              (isLoading ? (
                <LoadingSpinner className={"text-[var(--main-pink)]"} />
              ) : (
                <Check color="var(--main-pink)" size={20} />
              ))}
          </div>
        </Button>
        <hr />
        <Button onClick={() => onClick("es")} className={btnClasses}>
          <div>Spanish</div>
          <div>
            {lang === "es" &&
              (isLoading ? (
                <LoadingSpinner className={"text-[var(--main-pink)]"} />
              ) : (
                <Check color="var(--main-pink)" size={20} />
              ))}
          </div>
        </Button>
      </div>
    </AuthPage>
  );
};

export default LanguagePage;
