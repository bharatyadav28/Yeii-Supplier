"use client";
import { Eye, EyeClosed } from "lucide-react";
import { LockIcon } from "../../lib/icons";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

export const TextInput = (props) => {
  const { customIcon, label, onChange, value, className, iconClasses } = props;
  let classes = `w-full border-none outline-none text-lg ${
    !customIcon && "ml-4"
  } ${className}`;

  return (
    <div className="flex items-center bg-white rounded-[0.9rem] py-2 mb-2 ">
      {customIcon && (
        <span className={`px-5 ${iconClasses}`}>{customIcon}</span>
      )}
      <div className={`w-full pr-5`}>
        {label && (
          <label className="text-[var(--main-gray)] text-xs">{label}</label>
        )}
        <input
          onChange={onChange}
          value={value}
          {...props}
          className={classes}
        />
      </div>
    </div>
  );
};

export const TextArea = (props) => {
  const { customIcon, label, className } = props;

  let classes = `resize-none ${!customIcon && "ml-4"} ${className}`;
  return (
    <div className="flex items-center bg-white rounded-[15px] py-2 mb-2 ">
      {customIcon && <span className="px-5 py-4 self-start">{customIcon}</span>}
      <div className="w-full pr-5">
        {label && (
          <label className="text-[var(--main-gray)] text-xs">{label}</label>
        )}
        <Textarea {...props} className={classes} />
      </div>
    </div>
  );
};

export const SelectInput = (props) => {
  const { customIcon, label, onChange, value, className, placeholder, menu } =
    props;

  return (
    <div className={`flex items-center bg-white rounded-[15px] mb-2 `}>
      {customIcon && <span className="px-5 py-4 self-start">{customIcon}</span>}
      <div className="w-full pr-2">
        {label && (
          <label className="text-[var(--main-gray)] text-xs">{label}</label>
        )}

        <Select
          className="p-0"
          onValueChange={onChange}
          defaultValue={value}
          {...props}
        >
          <SelectTrigger className={className + " rounded-[15px] pl-5 !w-100"}>
            <SelectValue placeholder={placeholder || "Select One"} />
          </SelectTrigger>
          <SelectContent>
            {menu?.map((item) => {
              return <SelectItem value={item}>{item} </SelectItem>;
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export const PasswordInput = (props) => {
  const { onChange, value, label, className } = props;
  const [showPassword, setShowPassword] = useState("");
  return (
    <div
      className={`flex items-center bg-white rounded-[15px] py-1 mb-3 ${className}`}
    >
      <span className="px-5">
        <LockIcon color="gray" />
      </span>
      <div className="w-full">
        <label className="text-[var(--main-gray)] text-xs">{label}</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="*********"
          onChange={onChange}
          value={value}
          {...props}
          className="w-full border-none outline-none text-lg"
        />
      </div>
      <span className="px-5">
        {!showPassword ? (
          <Eye onClick={() => setShowPassword(!showPassword)} color="gray" />
        ) : (
          <EyeClosed
            onClick={() => setShowPassword(!showPassword)}
            color="gray"
          />
        )}
      </span>
    </div>
  );
};

export const CustomCheckBox = ({ className, onChange, value }) => {
  return (
    <Checkbox
      onCheckedChange={onChange}
      checked={value || false}
      className={`h-7 w-7 data-[state=checked]:bg-[var(--main-pink)] border-[var(--main-pink)] ${className}`}
    />
  );
};

export const CounterInput = (props) => {
  const { onChange, value, className } = props;
  const [inputValue, setInputValue] = useState(value || 0);

  const btnClasses =
    "bg-[#E5E5E5] hover:bg-[#E5E5E5] text-black p-3 text-sm h-3 rounded-full my-0";

  return (
    <div className="flex  mb-2 h-full bg-[var(--light)] justify-center items-center px-5  text-[0.8rem] rounded-xl">
      <Button
        className={btnClasses}
        type="button"
        onClick={() => setInputValue((prev) => Number(prev) - 1)}
      >
        -
      </Button>
      <input
        type="text"
        onChange={onChange}
        value={inputValue}
        {...props}
        className="w-full text-center"
      />
      <Button
        className={btnClasses}
        type="button"
        onClick={() => setInputValue((prev) => Number(prev) + 1)}
      >
        +
      </Button>
    </div>
  );
};
