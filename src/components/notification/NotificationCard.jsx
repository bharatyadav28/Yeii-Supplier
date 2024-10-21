import { alertIcon, notifyIcon } from "@/lib/svg_icons";

const NotificationCard = ({ item }) => {
  return (
    <div className="flex justify-between items-center py-2 border-b-2">
      <div className="flex items-center gap-2">
        <div className="w-[60px] h-[60px] flex justify-center items-center bg-white rounded-full">
          {item.category === "order" ? notifyIcon : alertIcon}
        </div>
        <div>
          <div className="text-base font-semibold">{item.type}</div>
          <div className="text-xs text-[var(--main-gray)] ">{item.message}</div>
        </div>
      </div>
      <div className="text-[10px]">{item.time}</div>
    </div>
  );
};

export default NotificationCard;
