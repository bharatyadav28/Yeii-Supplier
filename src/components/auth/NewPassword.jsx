"use client";
import { useTranslations } from "next-intl";

import { DarkButton } from "@/components/common/CustomButtons";
import { PasswordInput } from "@/components/common/customInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const t = useTranslations("resetPage");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heloooooo");
    router.push("/success/password_changed");
  };
  return (
    <form onSubmit={handleSubmit}>
      <PasswordInput
        label={t("password")}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />
      <PasswordInput
        label={t("confirmPassword")}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <DarkButton
        isSubmit={true}
        className="w-full text-lg p-7 rounded-2xl mt-5"
      >
        {t("reset_password")}
      </DarkButton>
    </form>
  );
};

export default NewPassword;
