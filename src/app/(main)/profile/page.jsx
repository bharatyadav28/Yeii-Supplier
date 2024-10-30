import { useTranslations } from "next-intl";

import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import Profile from "@/components/profile/Profile";

const ProfilePage = () => {
  const t = useTranslations("profilePage");
  return (
    <DashboardPage>
      <PageHeading pageName={t("profile")} />
      <Profile />
    </DashboardPage>
  );
};

export default ProfilePage;
