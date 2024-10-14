"use client";

import {
  CustomCheckBox,
  PasswordInput,
  SelectInput,
  TextArea,
  TextInput,
} from "@/components/common/customInput";
import { BackwardButton, BusinessIcon, EmailIcon, UserIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignupPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [option, setOption] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phoneNumber,
      address,
      option,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="w-full h-screen bg-[url('/bg-auth.png')] bg-cover bg-center">
      {/* create account page */}
      <div className="w-full h-full px-10 py-5 flex flex-col">
        {/* header */}
        <div className="flex justify-between items-center">
          <BackwardButton onClick={() => router.push("/login")} />
          <Image src="/logo2.png" width={60} height={60} />
        </div>
        {/* create account form */}
        <div className="w-[500px] ">
          <h1 className="text-3xl font-bold text-center text-white mb-4">
            Create account
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <TextInput
              customIcon={<UserIcon color="gray" />}
              type="text"
              label="Full name"
              placeholder="Enter Full name"
              value={name}
              required={true}
              onChange={(e) => setName(e.target.value)}
            />

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

            {/* Phone number */}
            <div className="flex items-center bg-white rounded-[15px] py-2 mb-2 ">
              {/* <span className="px-5"><Flag color="gray" /></span> */}
              <div className="pl-5">
                <label className="text-[var(--main-gray)] text-xs">
                  Phone number
                </label>
                <PhoneInput
                  country={"us"} // Default country
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber(phone)}
                  inputProps={{
                    name: "phoneNumber",
                    required: true,
                    autoFocus: true,
                  }}
                  containerClass="phone-input-container w-full" // Custom container class for styling
                />
              </div>
            </div>

            {/* Address */}
            <TextArea
              customIcon={<MapPin color="gray" />}
              label="Address"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              width="500px"
              required={true}
            />

            {/* selection of business */}
            <SelectInput
              customIcon={<BusinessIcon />}
              value={option}
              required={true}
              label="Are you operating as a ?"
              onChange={(e) => setOption(e)}
            />

            {/* Password */}
            <PasswordInput
              label="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required={true}
            />

            {/* Confirm password */}
            <PasswordInput
              label="Confirm new password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required={true}
            />

            {/* checkbox for privacy policy */}
            <div className="flex items-center justify-center self-center gap-3 text-sm">
              <CustomCheckBox />
              <p className="w-[70%]">
                By Signing up, you agree to the{" "}
                <Link href="/terms_of_service">terms of service</Link> and{" "}
                <Link href="/privacy_policy">privacy policy</Link>, including
                cookie use
              </p>
            </div>
            {/* Create account button */}
            <Button>Create account</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
