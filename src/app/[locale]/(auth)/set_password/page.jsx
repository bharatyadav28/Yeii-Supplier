import NewPassword from "@/components/auth/NewPassword";
import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";

const page = () => {
  return (
    <AuthPage route="/forgot_password" showHeader={true}>
      <AuthHeading heading="Set up new password">
        <p className="text-center text-xs text-white">
          Set your New Password So you can access your data
        </p>
      </AuthHeading>
      <NewPassword />
    </AuthPage>
  );
};

export default page;
