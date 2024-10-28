import { noNotificationIcon } from "@/lib/svg_icons";
import MainContent from "../common/MainContent";
import NoItems from "../common/NoItems";
import NotificationList from "./NotificationList";
import notificationData from "@/lib/dummyData/notificationData.json";
import { useTranslations } from "next-intl";

const NotifictionMain = () => {
  const { notifications } = notificationData;
  const t = useTranslations("notificationPage");
  return (
    <MainContent>
      {notificationData.length === 0 ? (
        <NoItems
          icon={noNotificationIcon}
          heading={t("no_noti_heading")}
          subHeading={t("no_noti_subHeading")}
        />
      ) : (
        <NotificationList notifications={notifications} />
      )}
    </MainContent>
  );
};

export default NotifictionMain;
