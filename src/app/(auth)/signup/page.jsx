import AuthPage from "@/components/common/AuthPage";
import AuthHeading from "@/components/common/AuthHeading";
import SignupForm from "@/components/auth/SignupForm";
import { useTranslations } from "next-intl";

const SignupPage = () => {
  const t = useTranslations("signupPage");

  return (
    <AuthPage route={"/login"} showHeader={true}>
      <div className="absolute -top-5 ">
        <AuthHeading heading={t("heading")} />
      </div>
      <SignupForm />
    </AuthPage>
  );
};

export default SignupPage;
