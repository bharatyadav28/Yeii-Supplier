"use client";

import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";
import { DarkButton } from "@/components/common/CustomButtons";
import { TextInput } from "@/components/common/customInput";
import { EmailIcon } from "@/lib/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    router.push("/otp");
  };
  return (
    <AuthPage route="/login" heading="Reset password">
      <div>
        <AuthHeading heading="Verify email id">
          <p className="text-center text-xs text-white">
            Please enter the email address linked with your account to Receive
            OTP to
            <br />
            change password.
          </p>
        </AuthHeading>
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
          <DarkButton className="w-full p-7 text-lg mt-4">Sent OTP</DarkButton>
        </form>
      </div>
    </AuthPage>
  );
};
export default ForgotPassword;
