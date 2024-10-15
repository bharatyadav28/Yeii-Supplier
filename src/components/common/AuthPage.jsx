"use client";

import { BackwardButton } from "@/components/common/CustomButtons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const AuthPage = ({ children, route, heading }) => {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-[url('/bg-auth.png')] bg-cover bg-center">
      <div className="w-full h-full px-10 py-5 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <BackwardButton onClick={() => router.push(route)} />
            {heading && (
              <h1 className="text-2xl font-bold text-center text-white ">
                {heading}
              </h1>
            )}
          </div>
          <Image src="/logo2.png" width={60} height={60} />
        </div>
        <div className="relative flex justify-center items-center h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
