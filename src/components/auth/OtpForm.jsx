"use client";

import { DarkButton } from "@/components/common/CustomButtons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const OtpFrom = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(119);
  const router = useRouter();

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

  const handleResendOtp = () => {
    // Logic to resend the OTP
    alert("OTP Resent!");
    setTimeLeft(119);
  };

  const handleSubmit = () => {
    // Logic for OTP submission
    alert(`OTP Submitted: ${otp.join("")}`);
    router.push("/set_password");
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
      <DarkButton onClick={handleSubmit} className="w-full ">
        Confirm
      </DarkButton>
      <div className="text-center">
        <p>{formatTime(timeLeft)}</p>
        <button
          onClick={handleResendOtp}
          className="text-[var(--main-pink)] mt-2 disabled:opacity-50"
          disabled={timeLeft > 0}
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default OtpFrom;
