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

export const TextInput = (props) => {
  const { customIcon, label, onChange, value, className } = props;
  return (
    <div
      className={`flex items-center bg-white rounded-[15px] py-2 mb-2  ${className}`}
    >
      <span className="px-5">{customIcon}</span>
      <div className="w-full pr-5">
        <label className="text-[var(--main-gray)] text-xs">{label}</label>
        <input
          onChange={onChange}
          value={value}
          className="w-full border-none outline-none text-md font-bold"
          {...props}
        />
      </div>
    </div>
  );
};

export const TextArea = (props) => {
  const { customIcon, label, className } = props;
  return (
    <div
      className={`flex items-center bg-white rounded-[15px]  mb-2 ${className}`}
    >
      <span className="px-5 py-4 self-start">{customIcon}</span>
      <div className="w-full pr-5">
        <label className="text-[var(--main-gray)] text-xs">{label}</label>
        <Textarea className="resize-none" {...props} />
      </div>
    </div>
  );
};

export const SelectInput = (props) => {
  const { customIcon, label, onChange, value, className } = props;

  return (
    <div
      className={`flex items-center bg-white rounded-[15px] mb-2 ${className}`}
    >
      <span className="px-5 py-4 self-start">{customIcon}</span>
      <div className="w-full pr-5">
        <label className="text-[var(--main-gray)] text-xs">{label}</label>

        <Select
          className="p-0"
          onValueChange={onChange}
          defaultValue={value}
          {...props}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select One" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
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

export const CustomCheckBox = ({ className, onChange }) => {
  return (
    <Checkbox
      onCheckedChange={onChange}
      className={`h-7 w-7 data-[state=checked]:bg-[var(--main-pink)] border-[var(--main-pink)] ${className}`}
    />
  );
};
