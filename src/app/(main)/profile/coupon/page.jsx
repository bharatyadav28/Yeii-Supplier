import AuthPage from "@/components/common/AuthPage";
import MainComp from "@/components/coupon/MainComp";
import { getCoupons } from "@/lib/fetchData";

const page = async () => {
  const couponsData = getCoupons();
  return (
    <AuthPage>
      <MainComp couponsData={couponsData} />
    </AuthPage>
  );
};

export default page;
