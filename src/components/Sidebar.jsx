"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  StoreIcon,
  BriefcaseBusiness as OrderIcon,
  Bell as NotificationIcon,
  User as ProfileIcon,
} from "lucide-react";

import { sidebarIcon } from "@/lib/svg_icons";
import { useTranslations } from "next-intl";

// Single sidebar link
const SidebarLink = ({ title, href, Icon }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.includes(href);
  // console.log({ pathname });
  let classes =
    "flex px-6 py-3 rounded-2xl items-center text-[var(--light)] font-medium  gap-3 ";

  if (isActive) {
    classes += "bg-[var(--main-pink)]";
  }

  return (
    <Link href={href}>
      <div className={classes}>
        <Icon size={15} />
        <div>{title}</div>
      </div>
    </Link>
  );
};

// Sidebar component
const Sidebar = ({ className }) => {
  const t = useTranslations("sidebar");
  const menuLinks = [
    {
      title: t("home"),
      href: "/",
      icon: HomeIcon,
    },
    {
      title: t("store"),
      href: "/store",
      icon: StoreIcon,
    },
    {
      title: t("orders"),
      href: "/orders",
      icon: OrderIcon,
    },
    {
      title: t("notification"),
      href: "/notification",
      icon: NotificationIcon,
    },
    {
      title: t("profile"),
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
