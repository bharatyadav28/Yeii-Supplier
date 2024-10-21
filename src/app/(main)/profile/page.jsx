import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import Profile from "@/components/profile/Profile";

const ProfilePage = () => {
  return (
    <DashboardPage>
      <PageHeading pageName="Profile" />
      <Profile />
    </DashboardPage>
  );
};

export default ProfilePage;
