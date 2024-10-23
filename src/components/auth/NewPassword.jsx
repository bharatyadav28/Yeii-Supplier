"use client";

import { DarkButton } from "@/components/common/CustomButtons";
import { PasswordInput } from "@/components/common/customInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heloooooo");
    router.push("/success/password_changed");
  };
  return (
    <form onSubmit={handleSubmit}>
      <PasswordInput
        label="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />
      <PasswordInput
        label="Confirm new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <DarkButton
        isSubmit={true}
        className="w-full text-lg p-7 rounded-2xl mt-5"
      >
        Reset password
      </DarkButton>
    </form>
  );
};

export default NewPassword;
