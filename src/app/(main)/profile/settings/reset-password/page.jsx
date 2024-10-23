import NewPassword from "@/components/auth/NewPassword";
import AuthPage from "@/components/common/AuthPage";
import AuthHeading from "@/components/common/AuthHeading";

const ResetPasswordPage = () => {
  return (
    <AuthPage
      route="/profile/settings"
      heading={"Reset password"}
      showHeader={true}
      isReset={true}
    >
      <AuthHeading
        heading="Set up new password"
        className="mb-3 text-[#00131F]"
      >
        <p className="text-center text-xs text-[#00131F]">
          Set your New Password So you can access your data
        </p>
      </AuthHeading>
      <NewPassword />
    </AuthPage>
  );
};

export default ResetPasswordPage;
