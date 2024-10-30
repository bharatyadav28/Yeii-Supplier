"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { DarkButton } from "./CustomButtons";

const SuccessCard = ({ heading, subHeading, route }) => {
  const router = useRouter();
  const t = useTranslations();

  return (
    <div className="relative">
      <div className="w-[115px] h-[60px]   border-[#9FB1DA] border-[8px] rounded-b-full absolute  left-1/2 -translate-x-1/2 "></div>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[100px] h-[100px] border-[8px] flex justify-center items-center bg-[var(--main-green)] rounded-full">
        <Check className="text-white" />
      </div>
      <div className="bg-white p-4 pt-24 w-[300px] rounded-3xl flex flex-col justify-center items-center gap-5">
        <div className="text-center font-bold text-xl">{heading}</div>
        <div className="text-center text-xs">{subHeading}</div>
        <DarkButton onClick={() => router.push(route)} className="w-full m-0">
          {t("continue")}
        </DarkButton>
      </div>
    </div>
  );
};

export default SuccessCard;
