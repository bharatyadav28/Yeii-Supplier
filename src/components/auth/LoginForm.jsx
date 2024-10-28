"use client";

import { PasswordInput, TextInput } from "@/components/common/customInput";
import { EmailIcon } from "@/lib/icons";
import { useState } from "react";
import { DarkButton } from "@/components/common/CustomButtons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email */}
      <TextInput
        className="text-sm"
        customIcon={<EmailIcon />}
        type="email"
        label="Email id"
        placeholder="Enter Email"
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password */}
      <PasswordInput
        label="Enter Password"
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
          Forgot password
        </Link>
      </div>

      {/* Login Button */}
      <DarkButton
        isSubmit={true}
        className="w-full text-base p-7 rounded-[15px]"
      >
        Login
      </DarkButton>
    </form>
  );
};

export default LoginForm;
