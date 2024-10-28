import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import HomeMain from "@/components/Home/HomeMain";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");
  return (
    <DashboardPage>
      <PageHeading pageName={t("heading")} avalability={true} />
      <HomeMain />
    </DashboardPage>
  );
}
