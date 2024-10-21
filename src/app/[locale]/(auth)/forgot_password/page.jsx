import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <AuthPage route="/login" heading="Reset password" showHeader={true}>
      <div>
        <AuthHeading heading="Verify email id">
          <p className="text-center text-xs text-white">
            Please enter the email address linked with your account to Receive
            OTP to
            <br />
            change password.
          </p>
        </AuthHeading>
        <ForgotPasswordForm />
      </div>
    </AuthPage>
  );
};
export default ForgotPassword;
