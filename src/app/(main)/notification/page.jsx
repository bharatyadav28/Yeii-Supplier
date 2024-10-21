import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import NotifictionMain from "@/components/notification/NotifictionMain";

const NotificationPage = () => {
  return (
    <DashboardPage>
      <PageHeading pageName="Notification" />
      <NotifictionMain />
    </DashboardPage>
  );
};

export default NotificationPage;
