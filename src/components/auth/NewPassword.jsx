"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { DarkButton } from "@/components/common/CustomButtons";
import { PasswordInput } from "@/components/common/customInput";
import { resetPassword } from "@/lib/serverActions";
import LoadingSpinner from "../common/LoadingSpinner";
import { clearDetails } from "@/lib/store/feature/UnauthUser";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const { email } = useSelector((state) => state.unauthUser);

  const t = useTranslations("resetPage");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error(t("password_mismatch"));
      return;
    }

    setIsSubmitting(true);
    const response = await resetPassword({ email, password, confirmPassword });

    if (!response.success) {
      toast.error(response.message);
    } else {
      setSuccess(true);
      dispatch(clearDetails());
      router.replace("/success/password_changed");
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    if (!email && !success) {
      router.replace("/forgot_password");
    }
  }, [email, success]);

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
        className={`w-full text-lg p-7 rounded-2xl mt-5 ${
          isSubmitting ? "cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? <LoadingSpinner /> : t("reset_password")}
      </DarkButton>
    </form>
  );
};

export default NewPassword;
