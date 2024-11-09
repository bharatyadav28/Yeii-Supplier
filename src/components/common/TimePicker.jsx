import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Clock } from "lucide-react";

const TimePicker = ({
  initialTime,
  onTimeChange,
  className,
  title,
  isViewOnly,
  containerClasses,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState({
    hours: "12",
    minutes: "00",
    period: "AM",
  });
  const dropdownRef = useRef(null);

  console.log("tile", title);

  useEffect(() => {
    if (initialTime) {
      const [time, period] = initialTime.split(" ");
      const [hours, minutes] = time.split(":");
      setSelectedTime({
        hours:
          hours === "12" ? "12" : String(parseInt(hours) % 12).padStart(2, "0"),
        minutes,
        period,
      });
    }
  }, [initialTime]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const periods = ["AM", "PM"];

  const handleTimeChange = (type, value) => {
    const newTime = { ...selectedTime, [type]: value };
    setSelectedTime(newTime);
    const formattedHours =
      newTime.hours === "12"
        ? "12"
        : String(parseInt(newTime.hours) % 12).padStart(2, "0");
    const formattedTime = `${formattedHours}:${newTime.minutes} ${newTime.period}`;
    if (onTimeChange) {
      onTimeChange(formattedTime);
    }
    if (type === "period") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const dropdownElement =
        dropdownRef.current.querySelector('[role="dialog"]');
      if (dropdownElement) {
        const { bottom } = dropdownRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const dropdownHeight = dropdownElement.offsetHeight;
        const shouldOpenUpward = bottom + dropdownHeight > windowHeight;
        dropdownElement.style.bottom = shouldOpenUpward ? "100%" : "auto";
        dropdownElement.style.top = shouldOpenUpward ? "auto" : "100%";
      }
    }
  }, [isOpen]);

  return (
    <div className="relative min-w-[5rem] " ref={dropdownRef}>
      <button
        className={`w-full py-[0.24rem] px-3  flex justify-start  bg-white rounded-[0.9rem] shadow-sm focus:outline-none focus:ring-0 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        disabled={isViewOnly || false}
      >
        <div
          className={`flex items-center justify-center gap-3 ${containerClasses}  `}
        >
          <div>
            <Clock size={21} />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <div className="text-[var(--medium-gray)] text-[0.7rem]">
              {title || "Start with"}
            </div>
            <div className="text-[#4D5A62] font-semibold text-[0.8rem]">
              {" "}
              {selectedTime.hours}:{selectedTime.minutes} {selectedTime.period}
            </div>
          </div>
          <div className={isViewOnly ? "hidden" : "block"}>
            <ChevronDown size={20} />
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          role="dialog"
          className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg"
          style={{ marginTop: "1px", marginBottom: "1px" }}
        >
          <div className="grid grid-cols-3 gap-2 p-2">
            <div>
              {/* <h3 className="text-sm font-semibold mb-1">Hours</h3> */}
              <div className="space-y-1 max-h-[9rem] overflow-y-auto">
                {hours.map((hour) => (
                  <button
                    key={hour}
                    className={`w-full text-left px-2 py-1 rounded ${
                      selectedTime.hours === hour
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleTimeChange("hours", hour)}
                    type="button"
                  >
                    {hour}
                  </button>
                ))}
              </div>
            </div>
            <div>
              {/* <h3 className="text-sm font-semibold mb-1">Minutes</h3> */}
              <div className="space-y-1 max-h-[9rem] overflow-y-auto">
                {minutes.map((minute) => (
                  <button
                    type="button"
                    key={minute}
                    className={`w-full text-left px-2 py-1 rounded ${
                      selectedTime.minutes === minute
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleTimeChange("minutes", minute)}
                  >
                    {minute}
                  </button>
                ))}
              </div>
            </div>
            <div>
              {/* <h3 className="text-sm font-semibold mb-1">AM/PM</h3> */}
              <div className="space-y-1">
                {periods.map((period) => (
                  <button
                    type="button"
                    key={period}
                    className={`w-full text-left px-2 py-1 rounded ${
                      selectedTime.period === period
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleTimeChange("period", period)}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
