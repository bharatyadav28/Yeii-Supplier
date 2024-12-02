"use client";

import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { CustomButton } from "@/components/common/CustomButtons";

const EmailCard = () => {
  const router = useRouter();
  const { email } = useSelector((state) => state.unauthUser);

  const t = useTranslations("otpPage");

  return (
    <>
      <div className="flex items-center justify-between p-3 px-5 rounded-xl bg-white opacity-50">
        <div className="flex items-center gap-3">
          <Mail className="text-lg" />
          <p className="pr-2">{email}</p>
        </div>
        <CustomButton
          onClick={() => router.push("/forgot_password")}
          className="px-5 py-0 rounded-xl w-max bg-transparent hover:bg-transparent hover:opacity-90 transition duration-300 text-black !border-[light-gray] border-[2px]"
        >
          {t("change")}
        </CustomButton>
      </div>
    </>
  );
};

export default EmailCard;
