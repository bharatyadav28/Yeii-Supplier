import Card from "../common/Card";
import MainContent from "../common/MainContent";

const HomeMain = () => {
  const title = "Order Request";
  return (
    <div className="w-full h-full flex gap-5 pb-4">
      <MainContent contentTitle={title} count="10"></MainContent>
      <Card className="w-[450px]  bg-slate-600 mt-4 rounded-xl"></Card>
    </div>
  );
};

export default HomeMain;
