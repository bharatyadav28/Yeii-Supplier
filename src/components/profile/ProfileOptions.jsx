"use client";
import {
  couponIcon,
  logoutIcon,
  policyIcon,
  profileIcon,
  settingIcon,
  termsIcon,
  transactionIcon,
} from "@/lib/svg_icons";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const OptionCard = ({ option }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.push(`${pathname}${option.route}`);
  };

  return (
    <button
      onClick={handleClick}
      className="flex py-[0.6rem] justify-between items-center border-b-[1px]"
    >
      <div className="flex justify-center items-center gap-4">
        <div className="w-[42px] h-[42px] bg-[var(--light-pink)] rounded-full flex justify-center items-center ">
          {option.icon}
        </div>
        <div className="text-sm font-semibold">{option.title}</div>
      </div>
      <ChevronRight className="text-[var(--main-gray)]" />
    </button>
  );
};

const ProfileOptions = () => {
  const options = [
    {
      id: 1,
      icon: profileIcon,
      title: "Manage Business Profile",
      route: "/manage_profile",
    },
    {
      id: 2,
      icon: transactionIcon,
      title: "My Transaction",
      route: "/transaction",
    },
    {
      id: 3,
      icon: couponIcon,
      title: "My coupon",
      route: "/coupon",
    },
    {
      id: 4,
      icon: settingIcon,
      title: "Settings",
      route: "/settings",
    },
    {
      id: 5,
      icon: policyIcon,
      title: "Settlement Policy",
      route: "/settlement",
    },
    {
      id: 6,
      icon: termsIcon,
      title: "Terms and Conditions",
      route: "/terms_and_conditions",
    },
  ];
  return (
    <div className="flex-grow flex flex-col gap-3 px-5 mt-4  overflow-y-auto ">
      {options.map((option) => (
        <OptionCard key={option.id} option={option} />
      ))}
      <button className="flex pt-[0.8rem] justify-between items-center ">
        <div className="flex justify-center items-center gap-4">
          <div className="w-[42px] h-[42px] bg-black/10 rounded-full flex justify-center items-center ">
            {logoutIcon}
          </div>
          <div className="text-sm font-semibold">Logout</div>
        </div>
        <ChevronRight className="text-[var(--main-gray)]" />
      </button>
    </div>
  );
};

export default ProfileOptions;
