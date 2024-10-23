"use client";

import { BackwardButton } from "@/components/common/CustomButtons";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AuthPage = ({ children, route, heading, showHeader }) => {
  const router = useRouter();
  const pathname = usePathname();
  const showLogo = !pathname.includes("profile");

  return (
    <div className="w-full flex flex-col !h-[100%] bg-[url('/bg-auth.png')] bg-cover bg-center overflow-auto">
      <div className="w-full h-full px-10 py-5 flex flex-col">
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
            {showLogo && <Image src="/logo2.png" width={60} height={60} />}
          </div>
        )}
        <div className="relative flex flex-col justify-center items-center h-full gap-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
