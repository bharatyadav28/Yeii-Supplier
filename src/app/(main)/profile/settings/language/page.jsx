"use client";
import { Check } from "lucide-react";

import AuthPage from "@/components/common/AuthPage";
import { Button } from "@/components/ui/button";
import { setLanguage } from "@/app/actions/setLanguage";
import { useEffect, useState } from "react";
import { getLanguage } from "@/app/actions/getLanguage";

const LanguagePage = () => {
  const [lang, setLang] = useState("en");
  const btnClasses =
    "w-full  rounded-xl flex justify-between bg-[#fff] text-[#323B41] font-semibold !py-8 hover:bg-slate-100 transition ";

  const onClick = (lang) => {
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
    <AuthPage showHeader={true} heading="Language" route="/profile/settings">
      <div className="flex flex-col mt-6 bg-[var(--light)] mb-auto w-full rounded-xl bg-[#fff]">
        <Button onClick={() => onClick("en")} className={btnClasses}>
          <div>English</div>
          <div>
            {lang === "en" && <Check color="var(--main-pink)" size={20} />}
          </div>
        </Button>
        <hr />
        <Button onClick={() => onClick("es")} className={btnClasses}>
          <div>Spanish</div>
          <div>
            {lang === "es" && <Check color="var(--main-pink)" size={20} />}
          </div>
        </Button>
      </div>
    </AuthPage>
  );
};

export default LanguagePage;
