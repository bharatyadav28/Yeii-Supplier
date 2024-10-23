import Image from "next/image";

const TransactionList = ({ heading, data }) => {
  return (
    <div className="p-4 border-b-2">
      <div className="text-sm text-[var(--main-gray)] mb-2">{heading}</div>
      {data.map((item) => (
        <div key={item.id} className="flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <div className="w-[47px] h-[47px] flex justify-center items-center bg-white rounded-full overflow-hidden">
              <Image src={item.image} alt={item.name} width={100} height={40} />
            </div>
            <div>
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-[10px] text-[var(--main-gray)] ">
                {item.address}
              </div>
            </div>
          </div>
          {item.status === "credit" ? (
            <div className="text-sm text-[var(--main-green)] font-semibold">
              + ${item.amount}
            </div>
          ) : (
            <div className="text-sm text-red-600 font-semibold">
              - ${item.amount}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
