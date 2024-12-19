import ProfileDetails from "./ProfileDetails";
import ProfileOptions from "./ProfileOptions";
import { getProfile } from "@/lib/fetchData";

const Profile = async () => {
  const profileData = await getProfile();
  const user = profileData?.data?.supplier;

  return (
    <div className="w-full h-full flex flex-col rounded-2xl overflow-y-hidden">
      <ProfileDetails user={user} />
      <ProfileOptions user={user} />
    </div>
  );
};

export default Profile;
