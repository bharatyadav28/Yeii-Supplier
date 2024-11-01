"use client";

import { DarkButton } from "@/components/common/CustomButtons";
import { TextInput } from "@/components/common/customInput";
import { EmailIcon } from "@/lib/icons";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const t = useTranslations("forgotPassword");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    router.push("/otp");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        className="text-sm"
        customIcon={<EmailIcon />}
        type="email"
        label={t("email")}
        placeholder={t("emailPlaceholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />
      <DarkButton isSubmit={true} className="w-full p-7 text-lg mt-4">
        {t("sent_otp")}
      </DarkButton>
    </form>
  );
};

export default ForgotPasswordForm;
