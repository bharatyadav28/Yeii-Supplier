"use client";
import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import { CustomCheckBox } from "@/components/common/customInput";
import MainContent from "@/components/common/MainContent";
import TimePicker from "@/components/common/TimePicker";
import { Switch } from "@/components/ui/switch";
import { updateBusinessAvailability } from "@/lib/serverActions";
import useHttp from "@/components/hooks/use-http";

const BusinessAvailability = ({ response }) => {
  const t = useTranslations("profilePage");
  const { isLoading, dbConnect, setIsLoading } = useHttp();

  const [data, setData] = useState({
    businessAvailability: {
      availabity: true,
      allDay: true,
      customDays: false,
      weekDays: [
        {
          day: "Monday",
          isAvailable: true,
          opening: "10:00 AM",
          closing: "11:00 PM",
        },
        {
          day: "Tuesday",
          isAvailable: true,
          opening: "10:00 AM",
          closing: "11:00 PM",
        },
        {
          day: "Wednesday",
          isAvailable: true,
          opening: "10:00 AM",
          closing: "11:00 PM",
        },
        {
          day: "Thursday",
          isAvailable: true,
          opening: "10:00 AM",
          closing: "11:00 PM",
        },
        {
          day: "Friday",
          isAvailable: true,
          opening: "10:00 AM",
          closing: "11:00 PM",
        },
        {
          day: "Saturday",
          isAvailable: true,
          opening: "10:00 AM",
          closing: "11:00 PM",
        },
        {
          day: "Sunday",
          isAvailable: true,
          opening: "10:00 AM",
          closing: "11:00 PM",
        },
      ],
    },
    language: "English",
  });

  const weeksDays = [
    t("Monday"),
    t("Tuesday"),
    t("Wednesday"),
    t("Thursday"),
    t("Friday"),
    t("Saturday"),
    t("Sunday"),
  ];

  const getDaydata = (day) => {
    const dayIndex = data.businessAvailability.weekDays.findIndex(
      (d) => d.day === day
    );
    if (dayIndex !== -1) {
      const dayData = data.businessAvailability.weekDays[dayIndex];
      return dayData;
    }
    return "";
  };

  // update week days time
  const updateTimeValue = (day, type, value) => {
    const dayIndex = data.businessAvailability.weekDays.findIndex(
      (d) => d.day === day
    );
    if (dayIndex !== -1) {
      const dayData = data.businessAvailability.weekDays[dayIndex];
      const newDayData = {
        ...dayData,
        [type]: value,
      };
      const newWeekDays = [...data.businessAvailability.weekDays];
      newWeekDays[dayIndex] = newDayData;
      setData((prev) => ({
        ...prev,
        businessAvailability: {
          ...prev.businessAvailability,
          weekDays: newWeekDays,
        },
      }));
    }
    setIsLoading(true);
  };

  // All days or custom days handler
  const updateDayAvailability = (day, value, isAllDays = false) => {
    let newWeekDays = [];
    if (isAllDays) {
      newWeekDays = data.businessAvailability.weekDays.map((d) => ({
        ...d,
        isAvailable: true,
      }));
    } else {
      const dayIndex = data.businessAvailability.weekDays.findIndex(
        (d) => d.day === day
      );
      if (dayIndex !== -1) {
        const dayData = data.businessAvailability.weekDays[dayIndex];
        const newDayData = {
          ...dayData,
          isAvailable: value,
        };
        newWeekDays = [...data.businessAvailability.weekDays];
        newWeekDays[dayIndex] = newDayData;
      }
    }

    setData((prev) => ({
      ...prev,
      businessAvailability: {
        ...prev.businessAvailability,
        allDay: isAllDays
          ? !prev.businessAvailability.allDay
          : prev.businessAvailability.allDay,
        customDays: isAllDays
          ? !prev.businessAvailability.customDays
          : prev.businessAvailability.customDays,
        weekDays: newWeekDays,
      },
    }));

    setIsLoading(true);
  };

  // handle field change
  const handleSubmit = async (data) => {
    await dbConnect(updateBusinessAvailability.bind(null, data));
  };

  // initalise fields
  useEffect(() => {
    if (response) {
      const data = response?.data?.data;

      const mergeWeekDays = (incomingDays, existingDays) => {
        const incomingDataMap = new Map(incomingDays?.map((d) => [d.day, d]));
        return existingDays.map(
          (existingDay) => incomingDataMap.get(existingDay.day) || existingDay
        );
      };

      setData((prev) => ({
        ...prev,
        businessAvailability: {
          ...prev.businessAvailability,
          availabity: data.businessAvailability.availabity,
          allDay: data.businessAvailability.allDay,
          customDays: data.businessAvailability.customDays,
          weekDays: mergeWeekDays(
            data.businessAvailability.weekDays,
            prev.businessAvailability.weekDays
          ),
        },
      }));
    }
  }, []);

  // submit form on value updation
  useEffect(() => {
    if (isLoading) handleSubmit(data);
  }, [isLoading, data]);

  console.log("data", data);

  return (
    <AuthPage
      showHeader={true}
      heading={t("business_availability")}
      route="/profile/settings"
    >
      <MainContent className="mt-8">
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-1">
            <div className="text-[#303F49] text-[1.125rem] font-semibold">
              {t("business_availability")}
            </div>
            <div className="text-[var(--medium-gray)] text-[0.875rem]">
              {t("bus_avail_desc")}
            </div>
          </div>

          <MainContent className="bg-white flex-grow  flex flex-col pt-6 px-6">
            {/* Is available switch */}
            <div className="flex justify-between  ">
              <div className="text-[0.875rem] ">{t("availability")}</div>
              <div className="flex flex-col items-center gap-1 justify-center">
                <Switch
                  className="data-[state=checked]:bg-[var(--main-pink)] h-6  w-11"
                  checked={data.businessAvailability.availabity}
                  onClick={async () => {
                    setData((prev) => ({
                      ...prev,
                      businessAvailability: {
                        ...prev.businessAvailability,
                        availabity: !prev.businessAvailability.availabity,
                      },
                    }));
                    setIsLoading(true);
                  }}
                />
                <div className="text-[#868082] text-[0.6rem]">
                  {data.businessAvailability.availabity
                    ? t("available")
                    : t("unavailable")}
                </div>
              </div>
            </div>

            {/* All days check box */}
            <div className="flex justify-between items-center ">
              <div className="text-[0.875rem]  border-t-[1px] border-dashed  border-[#F1F1F1] w-[40%] py-5 ">
                {t("all_day")}
              </div>
              <CustomCheckBox
                value={data.businessAvailability.allDay}
                onChange={() => updateDayAvailability("all", true, true)}
                className="h-6 w-6 mr-2 border-[#E6E9EB]"
              />
            </div>

            {/* Custom days check box */}
            <div className="flex justify-between items-center ">
              <div className="flex flex-col w-[40%] py-5  border-t-[1px] border-dashed  border-[#F1F1F1] ">
                <div className="text-[0.875rem]  ">{t("custom_days")}</div>
                <div className="text-[#4D5A62] text-[0.6rem]">
                  {t("select_date_time")}
                </div>
              </div>
              <CustomCheckBox
                value={data.businessAvailability.customDays}
                onChange={() => {
                  if (data.businessAvailability.customDays) {
                    return updateDayAvailability("all", true, true);
                  }
                  setData((prev) => ({
                    ...prev,
                    businessAvailability: {
                      ...prev.businessAvailability,
                      customDays: !prev.businessAvailability.customDays,
                      allDay: !prev.businessAvailability.allDay,
                    },
                  }));
                  setIsLoading(true);
                }}
                className="h-6 w-6 mr-2 border-[#E6E9EB]"
              />
            </div>

            {/* Weeks */}
            <div className=" border-t-[1px] border-dashed  border-[#F1F1F1] pt-4  flex flex-col gap-3 ">
              {weeksDays.map((day) => (
                <div key={day} className="flex justify-between items-center ">
                  <div className="text-[#303F49] text-[0.8rem] w-[5rem]">
                    {day}
                  </div>
                  <TimePicker
                    title={t("opening")}
                    className="border border-[#F1F1F1] rounded-[0.5rem]
                    px-4 py-2"
                    initialTime={getDaydata(day)?.opening}
                    onTimeChange={(time) =>
                      updateTimeValue(day, "opening", time)
                    }
                  />
                  <TimePicker
                    title={t("closing")}
                    className="border border-[#F1F1F1] rounded-[0.5rem]
                    px-4 py-2"
                    initialTime={getDaydata(day)?.closing}
                    onTimeChange={(time) =>
                      updateTimeValue(day, "closing", time)
                    }
                  />

                  <div className="flex flex-col items-center gap-1 justify-center">
                    <Switch
                      checked={getDaydata(day)?.isAvailable}
                      onClick={() => {
                        if (data.businessAvailability.allDay) return;
                        updateDayAvailability(
                          day,
                          !getDaydata(day)?.isAvailable
                        );
                      }}
                      // disabled={data.businessAvailability.allDay}
                      className={`data-[state=checked]:bg-[var(--main-pink)] h-6 w-11 ${
                        data.businessAvailability.allDay && "cursor-not-allowed"
                      } `}
                    />
                    <div className="text-[#868082] text-[0.6rem]">
                      {getDaydata(day)?.isAvailable ? t("open") : t("close")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MainContent>
        </div>
      </MainContent>
    </AuthPage>
  );
};

export default BusinessAvailability;
