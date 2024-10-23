"use client";
import AuthPage from "@/components/common/AuthPage";
import { CustomCheckBox } from "@/components/common/customInput";
import MainContent from "@/components/common/MainContent";
import TimePicker from "@/components/common/TimePicker";
import { Switch } from "@/components/ui/switch";

const AvailabilityPage = () => {
  const weeksDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <AuthPage
      showHeader={true}
      heading="Business availability "
      route="/profile/settings"
    >
      <MainContent className="mt-8">
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-1">
            <div className="text-[#303F49] text-[1.125rem] font-semibold">
              Business availability{" "}
            </div>
            <div className="text-[var(--medium-gray)] text-[0.875rem]">
              Choose the Business availability that will Shown to the customers{" "}
            </div>
          </div>

          <MainContent className="bg-white flex-grow  flex flex-col pt-6 px-6">
            <div className="flex justify-between  ">
              <div className="text-[0.875rem] ">Availability</div>
              <div className="flex flex-col items-center gap-1 justify-center">
                <Switch className="data-[state=checked]:bg-[var(--main-pink)] h-6  w-11" />
                <div className="text-[#868082] text-[0.6rem]">Available</div>
              </div>
            </div>

            <div className="flex justify-between items-center ">
              <div className="text-[0.875rem]  border-t-[1px] border-dashed  border-[#F1F1F1] w-[40%] py-5 ">
                All day
              </div>
              <CustomCheckBox className="h-6 w-6 mr-2 border-[#E6E9EB]" />
            </div>

            <div className="flex justify-between items-center ">
              <div className="flex flex-col w-[40%] py-5  border-t-[1px] border-dashed  border-[#F1F1F1] ">
                <div className="text-[0.875rem]  ">Custom days</div>
                <div className="text-[#4D5A62] text-[0.6rem]">
                  Select days and time as you prefer
                </div>
              </div>

              <CustomCheckBox className="h-6 w-6 mr-2 border-[#E6E9EB]" />
            </div>

            <div className=" border-t-[1px] border-dashed  border-[#F1F1F1] pt-4  flex flex-col gap-3 ">
              {weeksDays.map((day) => (
                <div className="flex justify-between items-center ">
                  <div className="text-[#303F49] text-[0.8rem] w-[5rem]">
                    {day}
                  </div>
                  <TimePicker
                    title="Opening"
                    className="border border-[#F1F1F1] rounded-[0.5rem]
                    px-4 py-2"
                  />
                  <TimePicker
                    title="Closing"
                    className="border border-[#F1F1F1] rounded-[0.5rem]
                    px-4 py-2"
                  />

                  <div className="flex flex-col items-center gap-1 justify-center">
                    <Switch className="data-[state=checked]:bg-[var(--main-pink)] h-6 w-11 " />
                    <div className="text-[#868082] text-[0.6rem]">Close</div>
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

export default AvailabilityPage;
