import Image from "next/image";
import { CrossButton, DarkButton, LightButton } from "./CustomButtons";
import { Check, ChevronRight, X } from "lucide-react";
import ItemCard from "./ItemCard";

const OrderItem = ({ order, isAccepted, onClick }) => {
  return (
    <div
      onClick={() => onClick(order)}
      className="bg-[var(--light)]  flex flex-col gap-3 w-full min-w-[12rem]  p-4 rounded-2xl  cursor-pointer"
    >
      {/* header */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-[35px] h-[35px] overflow-hidden">
            <Image
              src={order.customerDetails.profileImage}
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1 className="font-bold text-sm">{order.customerDetails.name}</h1>
            <p className="text-[10px] text-[var(--main-gray)] ">
              {order.customerDetails.address}
            </p>
          </div>
        </div>
        {isAccepted ? (
          <div className="text-right">
            <div className="text-[10px] text-[var(--main-gray)]">
              Delivery status
            </div>
            <div className="text-sm text-[var(--main-green)] font-bold">
              {order.deliveryStatus}
            </div>
          </div>
        ) : (
          <div className="flex gap-1">
            <LightButton className="rounded-full w-9 h-9 p-3">
              <X />
            </LightButton>
            <DarkButton className="rounded-full w-9 h-9 p-3">
              <Check />
            </DarkButton>
          </div>
        )}
      </div>
      {/* dashed line */}
      <div className="border-[1px] border-dashed"></div>
      {/* main */}
      {isAccepted ? (
        <div className="grid grid-cols-2 gap-2 text-right">
          {order.items.map((item, index) => (
            <ItemCard
              key={item._id}
              item={item}
              isAccepted={isAccepted}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-between">
          {/* left */}
          <div className="flex flex-col gap-2">
            <ItemCard
              key={order.items[0]._id}
              item={order.items[0]}
              index={0}
            />
            {order.items[1] && (
              <ItemCard
                key={order.items[1]._id}
                item={order.items[1]}
                index={0}
              />
            )}
            {!isAccepted && order.items.length - 2 ? (
              <div className="flex text-[10px] items-center text-[var(--main-gray)] mb-1">
                {order.items.length - 2} more Products{" "}
                <ChevronRight size={15} />
              </div>
            ) : (
              ""
            )}
          </div>
          {/* right */}

          <div className="text-right flex flex-col justify-between">
            <div>
              <div className="text-[10px] text-[var(--main-gray)] font-semibold">
                Date
              </div>
              <div className="text-xs font-bold">{order.placedOn}</div>
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--main-gray)]">
                Total
              </div>
              <div className="text-base text-[var(--lightblue)] font-bold">
                ${order.totalAmount}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* bottom dashed line */}
      {isAccepted && <div className="border-[1px] border-dashed"></div>}

      {/* footer */}
      {isAccepted && (
        <div className="flex justify-between items-center">
          <div>
            <div className="text-[10px] text-[var(--main-gray)] ">Date</div>
            <div className="text-xs font-semibold">{order.placedOn}</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-[var(--main-gray)] ">Category</div>
            <div className="text-xs font-semibold">
              {order.items[0].category}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-[var(--main-gray)] ">Total</div>
            <div className="text-[var(--lightblue)] font-semibold">
              ${order.totalAmount}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
