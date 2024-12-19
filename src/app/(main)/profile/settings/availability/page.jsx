import BusinessAvailability from "@/components/profile/BusinessAvailability";

import { getBusinessAvailability } from "@/lib/fetchData";

async function AvailabilityPage() {
  const res = await getBusinessAvailability();
  return <BusinessAvailability response={res} />;
}

export default AvailabilityPage;
