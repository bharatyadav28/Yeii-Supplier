"use client";

import { PasswordInput, TextInput } from "@/components/common/customInput";
import { EmailIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed, LockIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="relative bg-[url('/login.jpg')]  bg-cover bg-center  h-screen w-full ">
      <div className="absolute bg-black/60   h-screen w-full flex justify-center items-center">
        <div className="flex flex-col justify-center gap-10 items-center w-[500px] ">
          <Image src="/logo.png" width={100} height={100} />
          <div className="w-full bg-white  p-[1px] rounded-xl bg-gradient-to-br from-gray-700 to-gray-300">
            <div className="relative p-8 h-full bg-gradient-to-b from-[#251917] to-[#4D2237] rounded-xl ">
              {/* Header */}
              <h2 className="text-3xl font-bold text-center text-[var(--main-pink)] mb-2">
                Welcome back
              </h2>
              <p className="text-center text-gray-300 mb-8 text-xs">
                Login to your account
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <TextInput
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
                <Button>Login</Button>
              </form>

              {/* Footer */}
              <p className="text-center text-gray-400 mt-4 text-xs">
                Don’t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-yellow-400 hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
