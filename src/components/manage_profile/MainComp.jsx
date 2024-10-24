"use client";

import Image from "next/image";
import { user } from "@/lib/dummyData/userData.json";
import { SelectInput, TextArea, TextInput } from "../common/customInput";
import { useState } from "react";
import { BusinessIcon, EmailIcon, UserIcon } from "@/lib/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DarkButton, LightButton } from "../common/CustomButtons";
import { MapPin } from "lucide-react";
import { editIcon } from "@/lib/svg_icons";

const MainComp = () => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [operatingAs, setOperatingAs] = useState(user.operating_as);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [address, setAddress] = useState(user.address);
  const [showEditBtn, setShowEditBtn] = useState(true);

  const menu = ["Business", "Company", "Organization"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, operatingAs, phoneNumber, address });
  };

  const handleClick = () => {
    setShowEditBtn((prev) => !prev);
  };
  return (
    <div className="w-[400px] flex flex-col gap-4">
      <div className="self-center flex flex-col items-center">
        <div className="relative w-[120px] h-[120px] rounded-full border-4 mb-2">
          <Image
            src={user.image}
            alt={user.name}
            width={100}
            height={100}
            className="w-full h-full"
          />
          <DarkButton
            type="file"
            className="absolute w-8 h-8 right-0 bottom-0 rounded-full border-4 flex justify-center items-center p-[6px]"
          >
            {editIcon}
          </DarkButton>
        </div>
        <div className="text-lg text-white font-bold ">{user.name}</div>
        <div className="text-sm text-white">{user.email}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <TextInput
          customIcon={<UserIcon color="gray" />}
          type="text"
          label="Full name"
          placeholder="Enter Full name"
          value={name}
          required={true}
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          customIcon={<EmailIcon />}
          type="email"
          label="Email id"
          placeholder="Enter Email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readonly={true}
        />

        <SelectInput
          className="!pl-0"
          customIcon={<BusinessIcon />}
          value={operatingAs}
          required={true}
          menu={menu}
          label="Are you operating as a ?"
          onChange={(e) => setOperatingAs(e)}
        />

        <div className="flex items-center bg-white rounded-[15px] mb-2 py-1 ">
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

        <TextArea
          customIcon={<MapPin color="gray" />}
          label="Address"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          width="500px"
          required={true}
        />
        {showEditBtn ? (
          <DarkButton
            onClick={handleClick}
            className="w-full mt-3 py-7 text-base"
          >
            Edit
          </DarkButton>
        ) : (
          <>
            <DarkButton isSubmit={true} className="w-full mt-3 py-7 text-base">
              Save changes
            </DarkButton>
            <LightButton
              onClick={handleClick}
              className="w-full mt-2 py-7 text-base"
            >
              Cancel
            </LightButton>
          </>
        )}
      </form>
    </div>
  );
};

export default MainComp;
