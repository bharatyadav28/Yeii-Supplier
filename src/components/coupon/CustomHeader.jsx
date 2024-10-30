import { useRouter } from "next/navigation";
import { BackwardButton, DarkButton } from "../common/CustomButtons";

const CustomHeader = ({ heading, route, handleCreate, t }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-4">
        <BackwardButton onClick={() => router.push(route)} />
        {heading && (
          <h1 className="text-2xl font-bold text-center text-white ">
            {heading}
          </h1>
        )}
      </div>
      <DarkButton onClick={handleCreate} className="w-52">
        + {t("create_new_coupon")}
      </DarkButton>
    </div>
  );
};

export default CustomHeader;
