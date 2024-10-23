import { Check } from "lucide-react";

import AuthPage from "@/components/common/AuthPage";
import { Button } from "@/components/ui/button";

const LanguagePage = () => {
  const btnClasses =
    "w-full  rounded-xl flex justify-between bg-[#fff] text-[#323B41] font-semibold !py-8 hover:bg-slate-100 transition ";

  return (
    <AuthPage showHeader={true} heading="Language" route="/profile/settings">
      <div className="flex flex-col mt-6 bg-[var(--light)] mb-auto w-full rounded-xl bg-[#fff]">
        <Button className={btnClasses}>
          <div>English</div>
          <div>
            <Check color="var(--main-pink)" size={20} />
          </div>
        </Button>
        <hr />
        <Button className={btnClasses}>
          <div>Spanish</div>
          <div>{/* <Check color="var(--main-pink)" size= /> */}</div>
        </Button>
      </div>
    </AuthPage>
  );
};

export default LanguagePage;
