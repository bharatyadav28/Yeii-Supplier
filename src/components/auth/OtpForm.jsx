"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import { DarkButton } from "@/components/common/CustomButtons";
import { sendOtp, verifyOtp } from "@/lib/serverActions";
import LoadingSpinner from "../common/LoadingSpinner";

const OtpFrom = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(119);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const { email } = useSelector((state) => state.unauthUser);

  const router = useRouter();
  const t = useTranslations("otpPage");
  const disabledButton = isSubmitting || otp.join("").length < 4;

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.match(/^[0-9]*$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if a digit is entered
      if (value !== "" && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleResendOtp = async () => {
    // Logic to resend the OTP
    setIsSendingOtp(true);
    const response = await sendOtp(email);
    setIsSendingOtp(false);

    if (!response.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response?.data?.message);
    setTimeLeft(119);
  };

  const handleSubmit = async () => {
    // Logic for OTP submission

    if (disabledButton) {
      return;
    }

    setIsSubmitting(true);
    const response = await verifyOtp({ email, OTP: otp.join("") });
    setIsSubmitting(false);

    if (!response.success) {
      toast.error(response.message);
      return;
    }

    router.replace("/set_password");
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Countdown logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId); // Clear timer on component unmount
    }
  }, [timeLeft]);

  useEffect(() => {
    if (!email) {
      router.replace("/forgot_password");
    }
  }, [email]);

  return (
    <div className="flex flex-col items-center gap-10 p-6 rounded-3xl shadow-md bg-white">
      <div className="w-full flex justify-center gap-9">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            className={`w-12 h-12 border-[1px] rounded-full text-center text-lg outline-none ${
              otp[index] !== "" &&
              "border-[var(--main-pink)] text-[var(--main-pink)]"
            }`}
          />
        ))}
      </div>
      <DarkButton
        onClick={handleSubmit}
        className={`w-full group ${
          disabledButton ? "cursor-not-allowed " : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? <LoadingSpinner /> : t("confirm")}
      </DarkButton>

      <div className="text-center">
        <p>{timeLeft > 0 && formatTime(timeLeft)}</p>
        <button
          onClick={handleResendOtp}
          className="text-[var(--main-pink)] mt-2 disabled:opacity-50"
          disabled={timeLeft > 0 || isSendingOtp || isSubmitting}
        >
          {t("resend")}
        </button>
      </div>
    </div>
  );
};

export default OtpFrom;
