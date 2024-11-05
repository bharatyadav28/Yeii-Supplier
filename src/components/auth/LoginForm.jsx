"use client";

import { PasswordInput, TextInput } from "@/components/common/customInput";
import { EmailIcon } from "@/lib/icons";
import { useState } from "react";
import { DarkButton } from "@/components/common/CustomButtons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { userLogin } from "@/lib/serverActions";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const t = useTranslations("loginPage");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await userLogin({ email, password, type: "supplier" });

    // if (!response.success) {
    //   return;
    // }

    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email */}
      <TextInput
        className="text-sm"
        customIcon={<EmailIcon />}
        type="email"
        label={t("email")}
        placeholder={t("emailPlaceholder")}
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password */}
      <PasswordInput
        label={t("password")}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required={true}
      />

      {/* Forgot password */}
      <div className="flex justify-end items-end mb-6 text-xs">
        <Link
          href="/forgot_password"
          className="text-yellow-400 hover:underline"
        >
          {t("forgotPassword")}
        </Link>
      </div>

      {/* Login Button */}
      <DarkButton
        isSubmit={true}
        className="w-full text-base p-7 rounded-[15px]"
      >
        {t("login")}
      </DarkButton>
    </form>
  );
};

export default LoginForm;
