import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";
import EmailCard from "./EmailCard";
import OtpFrom from "./OtpForm";

const EnterOTP = () => {
  return (
    <AuthPage route="/forgot_password">
      <div>
        <AuthHeading heading="Enter OTP">
          <p className="text-center text-xs text-white">
            Please enter the email address linked with your account to Receive
            OTP
            <br />
            to change password.
          </p>
        </AuthHeading>
        <div className="flex flex-col gap-5">
          <EmailCard />
          <OtpFrom />
        </div>
      </div>
    </AuthPage>
  );
};

export default EnterOTP;
