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
  const { customIcon, label, onChange, value } = props;
  return (
    <div className="flex items-center bg-white rounded-[15px] py-2 mb-2 ">
      <span className="px-5">{customIcon}</span>
      <div className="w-full pr-5">
        <label className="text-[var(--main-gray)] text-xs">{label}</label>
        <input
          onChange={onChange}
          value={value}
          className="w-full border-none outline-none text-lg"
          {...props}
        />
      </div>
    </div>
  );
};

export const TextArea = (props) => {
  const { customIcon, label } = props;
  return (
    <div className="flex items-center bg-white rounded-[15px] py-2 mb-2 ">
      <span className="px-5 py-4 self-start">{customIcon}</span>
      <div className="w-full pr-5">
        <label className="text-[var(--main-gray)] text-xs">{label}</label>
        <Textarea className="resize-none" {...props} />
      </div>
    </div>
  );
};

export const SelectInput = (props) => {
  const { customIcon, label, onChange, value } = props;

  return (
    <div className="flex items-center bg-white rounded-[15px] py-2 mb-2 ">
      <span className="px-5 py-4 self-start">{customIcon}</span>
      <div className="w-full pr-5">
        <label className="text-[var(--main-gray)] text-xs">{label}</label>

        <Select onValueChange={onChange} defaultValue={value} {...props}>
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
  const { onChange, value, label } = props;
  const [showPassword, setShowPassword] = useState("");
  return (
    <div className="flex items-center bg-white rounded-[15px] py-2 mb-3">
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

export const CustomCheckBox = () => {
  return <Checkbox />;
};
