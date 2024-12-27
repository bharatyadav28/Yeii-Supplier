import Image from "next/image";
import userData from "@/lib/dummyData/userData.json";

import { getProfile } from "@/lib/fetchData";

const ProfileDetails = async ({ user }) => {
  // const { user } = userData;

  return (
    <div className="bg-[url('/profile-bg.png')] bg-center bg-cover rounded-3xl flex items-center flex-wrap p-5 gap-5">
      <div className="w-[205px] h-[205px] rounded-full relative">
        <Image
          src={user?.image}
          alt={user?.name}
          fill
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[22px] font-bold ">{user?.name}</div>
        <div className="text-xs text-[var(--main-gray)]">{user?.email}</div>
        <div className="text-xs text-[var(--main-gray)]">
          {user?.phoneNumber}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
