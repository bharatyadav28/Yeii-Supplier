"use client";

import { DarkButton } from "@/components/common/CustomButtons";
import { TextInput } from "@/components/common/customInput";
import { EmailIcon } from "@/lib/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    router.push("/otp");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        customIcon={<EmailIcon />}
        type="email"
        label="Email id"
        placeholder="Enter email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />
      <DarkButton isSubmit={true} className="w-full p-7 text-lg mt-4">
        Sent OTP
      </DarkButton>
    </form>
  );
};

export default ForgotPasswordForm;
