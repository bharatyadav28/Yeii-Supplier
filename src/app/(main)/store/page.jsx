import PageHeading from "@/components/common/PageHeading";

import DashboardPage from "@/components/common/DashboardPage";
import HeadMenu from "@/components/store/HeadMenu";
import MainContent from "@/components/common/MainContent";
import NoItems from "@/components/common/NoItems";
import { noItemsIcon } from "@/lib/svg_icons";

const StorePage = () => {
  const emptyHeading = "No items in store.";
  const emptySubHeading = (
    <p>
      You don&apos;t have any products listed in your store. You can sell
      products through the app by clicking on
      <span className="font-semibold">&quot;Add&quot; </span> to create a
      listing.
    </p>
  );

  return (
    <DashboardPage>
      <PageHeading pageName="Store" />
      <HeadMenu />
      <MainContent contentTitle="My product list" count="0">
        <NoItems
          icon={noItemsIcon}
          heading={emptyHeading}
          subHeading={emptySubHeading}
        />
      </MainContent>
    </DashboardPage>
  );
};

export default StorePage;
