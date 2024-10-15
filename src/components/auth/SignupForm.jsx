"use client";

import {
  CustomCheckBox,
  PasswordInput,
  SelectInput,
  TextArea,
  TextInput,
} from "@/components/common/customInput";
import { BusinessIcon, EmailIcon, UserIcon } from "@/lib/icons";
import { MapPin } from "lucide-react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { DarkButton } from "@/components/common/CustomButtons";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [option, setOption] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

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

    router.push("/success/account_created");
  };
  return (
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
      <div className="flex items-center bg-white rounded-[15px] mb-2 ">
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
        className="p-0"
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
      <div className="flex items-center justify-center self-center gap-3 text-xs pb-4 pt-2">
        <CustomCheckBox onChange={(e) => console.log(e)} />
        <p className="w-[55%]">
          By Signing up, you agree to the{" "}
          <Link
            href="/terms_of_service"
            className="text-[var(--main-pink)] hover:underline"
          >
            terms of service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy_policy"
            className="text-[var(--main-pink)] hover:underline"
          >
            privacy policy
          </Link>
          , including cookie use
        </p>
      </div>
      {/* Create account button */}
      <DarkButton className="w-full text-lg p-7 rounded-[15px]">
        Create account
      </DarkButton>
    </form>
  );
};

export default SignupForm;
