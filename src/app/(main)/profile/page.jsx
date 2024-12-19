import { useTranslations } from "next-intl";
import { Suspense } from "react";

import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import Profile from "@/components/profile/Profile";
import PageLoader from "@/components/common/PageLoader";

const ProfilePage = () => {
  const t = useTranslations("profilePage");
  return (
    <DashboardPage>
      <PageHeading pageName={t("profile")} />
      <Suspense fallback={<PageLoader />}>
        <Profile />
      </Suspense>
    </DashboardPage>
  );
};

export default ProfilePage;
