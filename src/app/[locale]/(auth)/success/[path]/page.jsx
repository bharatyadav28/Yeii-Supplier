import NotFound from "@/app/not-found";
import AuthPage from "@/components/common/AuthPage";
import SuccessCard from "@/components/common/SuccessCard";

const SuccessPage = ({ params }) => {
  const { path } = params;

  return (
    <AuthPage>
      {path === "password_changed" ? (
        <SuccessCard
          heading={
            <h1>
              Password Changed <br /> successfully
            </h1>
          }
          subHeading={<p>Your password has been changed successfully.</p>}
          route="/login"
        />
      ) : path === "account_created" ? (
        <SuccessCard
          heading={
            <h1>
              Account Created <br /> sucessfully
            </h1>
          }
          subHeading={<p>Your Account has been created sucessfully</p>}
          route="/"
        ></SuccessCard>
      ) : (
        <NotFound />
      )}
    </AuthPage>
  );
};

export default SuccessPage;
