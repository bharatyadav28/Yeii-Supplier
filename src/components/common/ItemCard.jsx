import Image from "next/image";

const ItemCard = ({ item }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
        <Image
          src={item.images[0] || "/restro.jpeg"}
          width={100}
          height={100}
        />
      </div>
      <div className="text-xs font-bold">
        {item.name} x {item.quantity}
      </div>
    </div>
  );
};

export default ItemCard;
