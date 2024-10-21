import Image from "next/image";
import { user } from "@/lib/dummyData/userData.json";

const ProfileDetails = () => {
  return (
    <div className="bg-[url('/profile-bg.png')] bg-center bg-cover rounded-3xl flex items-center flex-wrap p-5 gap-5">
      <div className="w-[205px] h-[205px]">
        <Image src={user.image} alt={user.name} width={205} height={205} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[22px] font-bold ">{user.name}</div>
        <div className="text-xs text-[var(--main-gray)]">{user.email}</div>
        <div className="text-xs text-[var(--main-gray)]">
          {user.phone_number}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
