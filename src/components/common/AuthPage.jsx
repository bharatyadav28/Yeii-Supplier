"use client";

import { BackwardButton } from "@/components/common/CustomButtons";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AuthPage = ({ children, route, heading, showHeader, className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const showLogo = !pathname.includes("profile");

  return (
    <div className="w-full flex flex-col !h-screen bg-[url('/bg-auth.png')] bg-cover bg-center overflow-y-auto custom-scrollbar">
      <div className="w-full h-full px-10 pt-5 flex flex-col">
        {showHeader && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <BackwardButton onClick={() => router.push(route)} />
              {heading && (
                <h1 className="text-2xl font-bold text-center text-white ">
                  {heading}
                </h1>
              )}
            </div>
            {showLogo && (
              <Image alt="logo" src="/logo2.png" width={60} height={60} />
            )}
          </div>
        )}
        <div
          className={
            "relative flex flex-col justify-center items-center h-full gap-5 " +
            className
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
