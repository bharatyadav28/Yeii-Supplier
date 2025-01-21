import Image from "next/image";

const ItemCard = ({ item, isAccepted, isOrdersPage, index, className }) => {
  const isFirst = index % 2 === 0;
  return (
    <div
      className={`flex items-center  ${
        isFirst ? "justify-start" : "justify-end"
      }   gap-2  w-full ${className}`}
    >
      <div
        className={`w-[28px] h-[28px] rounded-full overflow-hidden ${
          isAccepted && "w-[20px] h-[20px]"
        }`}
      >
        <Image
          alt="image"
          src={item.images ? item.images[0] : "/restro.jpeg"}
          width={100}
          height={100}
        />
      </div>
      <div
        className={`font-bold text-start  ${
          isAccepted
            ? "text-[10px]"
            : isOrdersPage
            ? "text-[0.72rem] font-semibold"
            : "text-xs "
        }`}
      >
        {item.name} x {item.quantity}
      </div>
    </div>
  );
};

export default ItemCard;
