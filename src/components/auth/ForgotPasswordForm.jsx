"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { DarkButton } from "@/components/common/CustomButtons";
import { TextInput } from "@/components/common/customInput";
import { EmailIcon } from "@/lib/icons";
import LoadingSpinner from "../common/LoadingSpinner";
import { sendOtp } from "@/lib/serverActions";
import toast from "react-hot-toast";
import { addDetails } from "@/lib/store/feature/UnauthUser";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const t = useTranslations("forgotPassword");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addDetails({ email }));

    setIsSubmitting(true);
    const response = await sendOtp(email);
    setIsSubmitting(false);

    if (!response.success) {
      toast.error(response.message || "Something went wrong");
    }
    toast.success(response?.data?.message);
    router.replace(`/otp`);
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
      <DarkButton
        isSubmit={true}
        disabled={isSubmitting}
        className={`w-full p-7 text-lg mt-4 ${
          isSubmitting ? "cursor-not-allowed" : ""
        }`}
      >
        {!isSubmitting ? t("sent_otp") : <LoadingSpinner />}
      </DarkButton>
    </form>
  );
};

export default ForgotPasswordForm;
