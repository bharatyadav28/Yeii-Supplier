import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import HomeMain from "@/components/Home/HomeMain";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <DashboardPage>
      <PageHeading pageName="home" avalability={true} />
      <HomeMain />
    </DashboardPage>
  );
}
