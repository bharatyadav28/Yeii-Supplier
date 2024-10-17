import Image from "next/image";

const ItemCard = ({ item, isAccepted }) => {
  return (
    <div className="flex items-center  gap-2 ">
      <div
        className={`w-[28px] h-[28px] rounded-full overflow-hidden ${
          isAccepted && "w-[20px] h-[20px]"
        }`}
      >
        <Image
          src={item.images[0] || "/restro.jpeg"}
          width={100}
          height={100}
        />
      </div>
      <div className={`font-bold ${isAccepted ? "text-[10px]" : "text-xs "}`}>
        {item.name} x {item.quantity}
      </div>
    </div>
  );
};

export default ItemCard;
