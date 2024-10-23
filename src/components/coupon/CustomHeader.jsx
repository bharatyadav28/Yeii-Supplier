import { useRouter } from "next/navigation";
import { BackwardButton, DarkButton } from "../common/CustomButtons";

const CustomHeader = ({ heading, route, handleCreate }) => {
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
        + Create new coupon
      </DarkButton>
    </div>
  );
};

export default CustomHeader;
