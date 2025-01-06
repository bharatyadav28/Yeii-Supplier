import Image from "next/image";
import CustomDialog from "../common/CustomDialog";
import { DarkButton, LightButton } from "../common/CustomButtons";
import ItemCard from "../common/ItemCard";
import { useTranslations } from "next-intl";
import { formatDate } from "@/lib/functions";
import useHttp from "../hooks/use-http";
import { orderConfimation } from "@/lib/serverActions";
import LoadingSpinner from "../common/LoadingSpinner";

const ViewOrder = ({ open, handleOpen, order }) => {
  const { isLoading, dbConnect } = useHttp();
  const t = useTranslations("orderDetails");

  console.log("View order", order);

  const handleConfirmation = async () => {
    if (isLoading) return;
    const confirmationData = {
      type: order.orderType,
      confirmBySupplier: !order.confirmBySupplier,
    };
    const response = await dbConnect(
      orderConfimation.bind(null, confirmationData, order.id)
    );

    if (response.success) {
      handleOpen();
    }
  };

  return (
    <CustomDialog
      open={open}
      handleOpen={handleOpen}
      title={t("order_details")}
      anableCross={true}
      className="w-[40vw] h-max"
    >
      {order && (
        <div>
          <div className="flex gap-3 border-b-2 py-3">
            <div className="rounded-full w-[52px] h-[52px] overflow-hidden">
              <Image
                alt="image"
                src={order.userDetails.image}
                width={100}
                height={100}
              />
            </div>
            <div>
              <div className="text-sm font-bold">{order.userDetails.name}</div>
              <div className="text-[10px] text-[var(--main-gray)] ">
                {order.userDetails.phone}
              </div>
              <div className="text-[10px] text-[var(--main-gray)]">
                {order.userDetails.address}
              </div>
            </div>
          </div>
          <div className="border-b-2 py-3">
            <div>{t("items")}</div>
            <div className="flex flex-wrap">
              {order.items.map((item, index) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  index={index}
                  className="!justify-normal max-w-[33%] py-2"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between border-b-2 py-3">
            <div>
              <div className="text-[10px] text-[var(--main-gray)] ">
                {t("date")}
              </div>
              <div className="text-xs font-semibold">
                {formatDate(order.createdAt)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-[var(--main-gray)] ">
                {t("total")}
              </div>
              <div className="text-sm font-bold text-[var(--lightblue)]">
                ${order.totalPrice}
              </div>
            </div>
          </div>
          <div className="flex gap-2 pt-4">
            <LightButton
              onClick={handleConfirmation}
              className="flex-grow border-2 text-base"
            >
              {t("decline")}
            </LightButton>
            <DarkButton
              onClick={handleConfirmation}
              className="flex-grow text-base"
            >
              {isLoading ? <LoadingSpinner /> : t("accept")}
            </DarkButton>
          </div>
        </div>
      )}
    </CustomDialog>
  );
};

export default ViewOrder;
