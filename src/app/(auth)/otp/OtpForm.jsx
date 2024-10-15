"use client";

import { DarkButton } from "@/components/common/CustomButtons";
import { useState } from "react";

const OtpFrom = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState("01:59");

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
  };

  const handleSubmit = () => {
    // Logic for OTP submission
    alert(`OTP Submitted: ${otp.join("")}`);
  };

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
            className={`w-12 h-12 border-[1px] rounded-full text-center text-lg outline-none ${otp[index] !== "" && "border-[var(--main-pink)] text-[var(--main-pink)]"}`}
          />
        ))}
      </div>
      <DarkButton onClick={handleSubmit} className="w-full ">
        Confirm
      </DarkButton>
      <div className="text-center">
        <p>{timer}</p>
        <button
          onClick={handleResendOtp}
          className="text-[var(--main-pink)] mt-2"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default OtpFrom;
