import React from "react";
import { useTranslations } from "next-intl";

import { Input } from "../ui/input";
import { Search } from "lucide-react";

function SearchInput({ className, onChange }) {
  const t = useTranslations();
  const handleInputChange = (event) => {
    const value = event.target.value?.trim();
    if (value) {
      onChange(value);
    }
  };
  let classes =
    "pl-10 py-6 rounded-xl w-[18rem] bg-[var(--light-gray)] focus-visible:ring-0 focus-visible:ring-offset-0";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-black" aria-hidden="true" />
      </span>
      <Input
        type="search"
        placeholder={t("search")}
        onChange={handleInputChange}
        className={classes}
      />
    </div>
  );
}

export default SearchInput;
