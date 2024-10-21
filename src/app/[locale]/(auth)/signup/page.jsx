import AuthPage from "@/components/common/AuthPage";
import AuthHeading from "@/components/common/AuthHeading";
import SignupForm from "@/components/auth/SignupForm";

const SignupPage = () => {
  return (
    <AuthPage route={"/login"} showHeader={true}>
      <div className="absolute -top-5 ">
        <AuthHeading heading="Create account" />
      </div>
      <SignupForm />
    </AuthPage>
  );
};

export default SignupPage;
