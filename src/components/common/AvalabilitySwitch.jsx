"use client";

import { useState } from "react";
import { Switch } from "../ui/switch";
import { format } from "date-fns";

const AvalabilitySwitch = () => {
  const today = format(new Date(), "dd/MM/yyyy");
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex items-center justify-between bg-[var(--light-gray)] px-3 py-2 w-56 rounded-2xl">
      <div>
        <p className="text-[10px] text-[var(--main-gray)]">Availability</p>
        <h1 className="font-bold text-sm">{today}</h1>
      </div>
      <Switch
        onClick={() => setChecked((prev) => !prev)}
        checked={checked}
        className="data-[state=checked]:bg-[var(--main-pink)] "
      />
    </div>
  );
};

export default AvalabilitySwitch;
