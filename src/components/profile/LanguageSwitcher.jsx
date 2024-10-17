"use client";

import { useState } from "react";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState("en");
  const changeLanguage = (lang) => {
    setLang(lang);
  };
  return (
    <>
      <div className="m-4">Language</div>
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
