import { useState } from "react";
import { TransactionResponse } from "../../../../interfaces/checkoutInterface";
import { Button } from "../../../../components/Button";
import TransactionDetailsModal from "../../../../components/Modal/TransactionModal";

const TransactionTRow = (transaction: TransactionResponse) => {
  const {
    id,
    order_date,
    total_price,
    payment_method,
    delivery_method,
    userId,
  } = transaction;

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const orderDate = new Date(order_date).toLocaleDateString("id-ID");

  return (
    <>
      <tr key={id} className="hover:cursor-pointer hover:bg-gray-100 w-16">
        <td className="px-3">{`ORDER-INV0${id}`}</td>
        <td className="px-3">{orderDate}</td>
        <td className="px-3">{`USER-${userId}`}</td>
        <td className="px-3">{payment_method}</td>
        <td className="px-3">{delivery_method.name}</td>
        <td className="px-3">{"Rp. " + total_price.toLocaleString("id-ID")}</td>
        <td className="px-3 py-4">
          <Button
            onClick={openModal}
            variant="outline"
            className="py-2"
          >
            Lihat Detail
          </Button>
        </td>
      </tr>
      <TransactionDetailsModal
        transaction={transaction}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default TransactionTRow;
