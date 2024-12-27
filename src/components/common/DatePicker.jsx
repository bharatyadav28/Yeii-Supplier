import { isValid, parseISO } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/functions";

export const DatePicker = ({
  title,
  className,
  onChange,
  children,
  value,
  ...props
}) => {
  // Create a new Date object using "YYYY-MM-DD"
  const [date, setDate] = useState();
  useEffect(() => {
    if (isValid(date)) {
      onChange(formatDate(date));
    }
  }, [date]);

  useEffect(() => {
    if (value) {
      // Parse value into a Date object if it's a string
      const parsedDate = typeof value === "string" ? parseISO(value) : value;
      if (isValid(parsedDate)) {
        setDate(parsedDate);
      }
    }
  }, [value]);

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
