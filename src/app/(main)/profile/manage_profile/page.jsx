import ManageProfileWrapper from "@/components/manage_profile/ManageProfileWrapper";
import { getProfile } from "@/lib/fetchData";

const ManageProfile = async () => {
  const profileData = await getProfile();
  const user = profileData?.data?.supplier;
  return <ManageProfileWrapper user={user} />;
};

export default ManageProfile;
