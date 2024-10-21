// "use server";
import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import LanguageSwitcher from "@/components/profile/LanguageSwitcher";
import { useTranslations } from "next-intl";

const StorePage = () => {
  const t = useTranslations("Homepage");

  return (
    <DashboardPage>
      <PageHeading pageName="profile" />
      <LanguageSwitcher />
    </DashboardPage>
  );
};

export default StorePage;
