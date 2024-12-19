"use client";

import { PasswordInput, TextInput } from "@/components/common/customInput";
import { EmailIcon } from "@/lib/icons";
import { useState } from "react";
import { DarkButton } from "@/components/common/CustomButtons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import LoadingSpinner from "../common/LoadingSpinner";
import { userLogin } from "@/lib/serverActions";
import { addDetails } from "@/lib/store/feature/UnauthUser";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations("loginPage");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    const response = await userLogin({ email, password, type: "supplier" });

    if (!response.success) {
      toast.error(response.message || "Something went wrong");
    } else {
      dispatch(addDetails({ email }));
      router.push("/");
    }

    setIsSubmitting(false);
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
        disabled={isSubmitting}
        className={`w-full text-base p-7 rounded-[15px] ${
          isSubmitting ? "cursor-not-allowed" : ""
        } `}
      >
        {!isSubmitting ? t("login") : <LoadingSpinner />}
      </DarkButton>
    </form>
  );
};

export default LoginForm;
