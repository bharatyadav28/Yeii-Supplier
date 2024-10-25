import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
export const DatePicker = ({ title, className, value, onChange, ...props }) => {
  const dateString = "25/10/2024";
  const [day, month, year] = dateString.split("/");

  // Create a new Date object using "YYYY-MM-DD"
  const [date, setDate] = useState(new Date(`${year}-${month}-${day}`));
  useEffect(() => {
    onChange(format(date, "dd/MM/yyyy"));
    console.log(date);
  }, [date]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          {...props}
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal disabled:!cursor-not-allowed " +
              className,
            !date && "text-muted-foreground"
          )}
          disabled={props.disabled}
        >
          {date ? format(date, "dd/MM/yyyy") : <span>{title}</span>}
        </Button>
      </PopoverTrigger>
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
