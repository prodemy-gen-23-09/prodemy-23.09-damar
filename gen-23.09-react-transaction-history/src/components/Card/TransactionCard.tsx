import { useState } from "react";
import { TransactionResponse } from "../../interfaces/checkoutInterface";
import { Button } from "../Button";
import TransactionDetailsModal from "../Modal/TransactionModal";

const TransactionCard = (transaction: TransactionResponse) => {
  const { id, order_date, total_price, order_items } = transaction;
  const { product } = order_items[0];

  const getFormatDate = (date: string) => {
    const newDate = new Date(date);
    return newDate
      .toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
      .replace("pukul", `, `)
      .replace(".", ":")
      .concat(" WIB");
  };
  const orderDateFormatted = getFormatDate(order_date);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 p-5">
      <div className="flex flex-row justify-between text-sm">
        <div className="flex flex-row items-start gap-x-2">
          <p>{`ORDER-INV0${id}`}</p>
          <span>|</span>
          <p>{orderDateFormatted}</p>
        </div>
        <div className="w-100% self-end">
          <Button variant="outline" className="w-40 py-1" onClick={openModal}>
            Lihat detail
          </Button>
        </div>
      </div>
      <span className="text-xs text-primary">{product.toko.name}</span>
      <div className="mt-2 flex flex-row justify-between">
        <div className="flex flex-row gap-x-8">
          <img className="h-20" src={product.images[0]} alt={product.name} />
          <div className="flex flex-col items-start self-center">
            <p className="text-sm">
              {order_items.length > 1
                ? `${product.name} dan ${order_items.length - 1} lainnya`
                : product.name}
            </p>
            <p className="text-sm">
              {" "}
              {`Rp. ${product.price.toLocaleString("id-ID")}`}
            </p>
          </div>
        </div>
        <div className="me-5 flex flex-col self-center">
          <p>Total Belanja</p>
          <p className="font-semibold">{`Rp. ${total_price.toLocaleString(
            "id-ID",
          )}`}</p>
        </div>
      </div>
      <TransactionDetailsModal
        isOpen={isOpen}
        closeModal={closeModal}
        transaction={transaction}
        orderDateFormatted={orderDateFormatted}
      />
    </div>
  );
};

export default TransactionCard;
