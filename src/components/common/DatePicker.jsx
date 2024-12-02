import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

export const DatePicker = ({
  title,
  className,
  onChange,
  children,
  value,
  ...props
}) => {
  // const dateString = "25/10/2024";
  const [day, month, year] = value.split("/");
  const getDate = () => {
    return value ? new Date(`${year}-${month}-${day}`) : new Date();
  };

  // Create a new Date object using "YYYY-MM-DD"
  const [date, setDate] = useState(getDate());
  useEffect(() => {
    onChange(format(date, "dd/MM/yyyy"));
  }, [date]);
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
