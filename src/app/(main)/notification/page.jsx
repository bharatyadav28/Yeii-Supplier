import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import NotifictionMain from "@/components/notification/NotifictionMain";
import { useTranslations } from "next-intl";

const NotificationPage = () => {
  const t = useTranslations("notificationPage");
  return (
    <DashboardPage>
      <PageHeading pageName={t("heading")} />
      <NotifictionMain />
    </DashboardPage>
  );
};

export default NotificationPage;
