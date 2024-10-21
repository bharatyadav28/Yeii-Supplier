"use client";
import {
  HomeIcon,
  StoreIcon,
  BriefcaseBusiness as OrderIcon,
  Bell as NotificationIcon,
  User as ProfileIcon,
} from "lucide-react";

import { sidebarIcon } from "@/lib/svg_icons";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

// Single sidebar link
const SidebarLink = ({ title, href, Icon }) => {
  const pathname = usePathname();
  const t = useTranslations();
  // console.log("Sidebar", { pathname });
  const isActive = pathname === href;

  let classes =
    "flex px-6 py-3 rounded-2xl items-center text-[var(--light)] font-medium  gap-3 ";

  if (isActive) {
    classes += "bg-[var(--main-pink)]";
  }

  return (
    <Link href={href}>
      <div className={classes}>
        <Icon size={15} />
        <div>{t(title)}</div>
      </div>
    </Link>
  );
};

// Sidebar component
const Sidebar = ({ className }) => {
  const menuLinks = [
    {
      title: "home",
      href: "/",
      icon: HomeIcon,
    },
    {
      title: "store",
      href: "/store",
      icon: StoreIcon,
    },
    {
      title: "orders",
      href: "/orders",
      icon: OrderIcon,
    },
    {
      title: "notification",
      href: "/notification",
      icon: NotificationIcon,
    },
    {
      title: "profile",
      href: "/profile",
      icon: ProfileIcon,
    },
  ];

  return (
    <div
      className={`bg-[url('/sidebar.png')] bg-cover bg-center fixed left-0 z-10 inset-y-0 max-h-screen flex flex-col py-[2rem] ${className} `}
    >
      <div className="flex justify-center px-4 ">{sidebarIcon}</div>

      <div className="mt-[3rem] mx-7 flex flex-col gap-4">
        {menuLinks?.map((item, index) => (
          <SidebarLink
            key={index}
            title={item.title}
            href={item.href}
            Icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
