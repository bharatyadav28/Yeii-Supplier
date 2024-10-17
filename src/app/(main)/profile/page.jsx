import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import LanguageSwitcher from "@/components/profile/LanguageSwitcher";

const StorePage = () => {
  return (
    <DashboardPage>
      <PageHeading pageName="Profile" />
      <LanguageSwitcher />
    </DashboardPage>
  );
};

export default StorePage;
