import { noNotificationIcon } from "@/lib/svg_icons";
import MainContent from "../common/MainContent";
import NoItems from "../common/NoItems";
import NotificationList from "./NotificationList";
import notificationData from "@/lib/dummyData/notificationData.json";

const NotifictionMain = () => {
  const { notifications } = notificationData;
  return (
    <MainContent>
      {notificationData.length === 0 ? (
        <NoItems
          icon={noNotificationIcon}
          heading="Stay Updated!"
          subHeading="No notifications yet. As soon as something important happens, you'll see it her"
        />
      ) : (
        <NotificationList notifications={notifications} />
      )}
    </MainContent>
  );
};

export default NotifictionMain;
