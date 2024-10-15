"use client";

import { Switch } from "../ui/switch";

const AvalabilitySwitch = () => {
  const date = "24/07/24";
  return (
    <div className="flex items-center justify-between bg-[var(--light-gray)] px-3 py-2 w-56 rounded-2xl">
      <div>
        <p className="text-[10px] text-[var(--main-gray)]">Availability</p>
        <h1 className="font-bold text-sm">{date}</h1>
      </div>
      <Switch className="data-[state=checked]:bg-[var(--main-pink)] " />
    </div>
  );
};

export default AvalabilitySwitch;
