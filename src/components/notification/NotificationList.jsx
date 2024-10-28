import { useTranslations } from "next-intl";
import NotificationCard from "./NotificationCard";

const NotificationList = ({ notifications }) => {
  const t = useTranslations("notificationPage");
  console.log(notifications);
  const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format

  const todayNotifications = notifications.filter(
    (notification) => notification.date === today
  );
  const pastNotifications = notifications.filter(
    (notification) => notification.date !== today
  );
  return (
    <>
      <div>
        <div className="pb-3 text-lg font-bold">
          {t("today")}{" "}
          <span className="text-[var(--main-gray)]">{`(${todayNotifications.length})`}</span>
        </div>
        {todayNotifications.map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-5">
        <div className="pb-3 text-lg font-bold">
          {t("yesterday")}{" "}
          <span className="text-[var(--main-gray)]">{`(${pastNotifications.length})`}</span>
        </div>
        {pastNotifications.map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default NotificationList;
