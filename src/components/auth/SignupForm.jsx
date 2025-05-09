"use client";

import {
  CustomCheckBox,
  PasswordInput,
  SelectInput,
  TextArea,
  TextInput,
} from "@/components/common/customInput";
import { BusinessIcon, EmailIcon, UserIcon } from "@/lib/icons";
import { Loader2, MapPin } from "lucide-react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { DarkButton } from "@/components/common/CustomButtons";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { createUser } from "@/lib/serverActions";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import LoadingSpinner from "../common/LoadingSpinner";
import { addDetails } from "@/lib/store/feature/UnauthUser";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [option, setOption] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const router = useRouter();
  const t = useTranslations("signupPage");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submittedData = {
      name,
      email,
      phoneNumber,
      address,
      option,
      password,
      confirmPassword,
      type: "supplier",
    };

    try {
      if (!phoneNumber || phoneNumber.length < 10) {
        toast.error(t("phoneNumber_validation"));
        return;
      }
      if (!acceptedPolicy) {
        toast.error(t("terms_acceptence"));
        return;
      }

      if (password !== confirmPassword) {
        toast.error(t("password_mismatch"));
        return;
      }

      if (password.length < 6) {
        toast.error(t("password_validation"));
        return;
      }

      setIsSubmitting(true);
      const response = await createUser(submittedData);

      if (!response.success) {
        // alert(response.message);
        toast.error(response.message);
      } else {
        toast.success(response?.data?.message || "Login to continue");
        dispatch(addDetails({ email, isSignup: true }));
        router.push("/otp");
      }

      setIsSubmitting(false);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Full Name */}
      <TextInput
        divClass="!py-1"
        className="text-sm"
        customIcon={<UserIcon color="gray" />}
        type="text"
        label={t("fullName")}
        placeholder={t("fullNamePlaceholder")}
        value={name}
        required={true}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Email */}
      <TextInput
        divClass="!py-1"
        className="text-sm"
        customIcon={<EmailIcon />}
        type="email"
        label={t("email")}
        placeholder={t("emailPlaceholder")}
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Phone number */}
      <div className="flex items-center bg-white rounded-[15px] mb-2 py-0">
        {/* <span className="px-5"><Flag color="gray" /></span> */}
        <div className="pl-5">
          <label className="text-[var(--main-gray)] text-[10px]">
            {t("phoneNumber")}
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
        divClass="!py-0"
        className="text-sm"
        customIcon={<MapPin color="gray" />}
        label={t("address")}
        placeholder={t("addressPlaceholder")}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        width="500px"
        required={true}
      />

      {/* selection of business */}
      <SelectInput
        className="p-0 text-xs h-8"
        customIcon={<BusinessIcon />}
        value={option}
        // required={true}
        label={t("bussinessLabel")}
        onChange={(e) => setOption(e)}
        menu={["Business", "Company", "Organization"]}
        // required={true}
      />

      {/* Password */}
      <PasswordInput
        className="!py-1"
        label={t("password")}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required={true}
      />

      {/* Confirm password */}
      <PasswordInput
        className="!py-1"
        label={t("confirmPassword")}
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        required={true}
      />

      {/* checkbox for privacy policy */}
      <div className="flex items-center justify-center self-center gap-3 text-xs pb-4 pt-2">
        <CustomCheckBox onChange={(e) => setAcceptedPolicy(e)} />
        <p className="w-[55%]">
          {t("terms1")}{" "}
          <Link
            href="/terms_of_service"
            className="text-[var(--main-pink)] hover:underline"
          >
            {t("terms_of_service")}
          </Link>{" "}
          {t("and")}{" "}
          <Link
            href="/privacy_policy"
            className="text-[var(--main-pink)] hover:underline"
          >
            {t("privacy_policy")}
          </Link>
          {t("terms2")}
        </p>
      </div>
      {/* Create account button */}
      <DarkButton
        isSubmit={true}
        className={`w-full text-base p-7 rounded-[15px] ${
          isSubmitting ? "cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
      >
        {!isSubmitting ? t("heading") : <LoadingSpinner />}
      </DarkButton>
    </form>
  );
};

export default SignupForm;
