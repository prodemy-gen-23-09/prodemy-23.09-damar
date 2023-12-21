import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ProductInTransactionCard from "../Card/OrderCard";
import { Button } from "../Button";
import { TransactionResponse } from "../../interfaces/checkoutInterface";

interface TransactionDetailsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  orderDateFormatted: string;
  transaction: TransactionResponse;
}

const TransactionDetailsModal = ({
  isOpen,
  closeModal,
  orderDateFormatted,
  transaction,
}: TransactionDetailsModalProps) => {
  const {
    id,
    payment_method,
    delivery_method,
    user_details,
    total_price,
    order_items,
    promo_used,
  } = transaction;

  const subTotal = order_items.reduce((acc, curr) => acc + curr.sub_total, 0);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-5 text-center text-sm">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="border border-transparent border-b-gray-200 pb-2 text-lg font-bold leading-6"
                >
                  Detail Transaksi
                </Dialog.Title>
                <div className="mt-2 flex flex-col gap-y-1 border-4 border-transparent border-b-gray-200 pb-2">
                  <div className="flex flex-row items-center justify-between">
                    <p>Invoice pembelian</p>
                    <p className="font-semibold text-primary">{`ORDER-INV0${id}`}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Tanggal Pembelian</p>
                    <p>{orderDateFormatted}</p>
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-y-2 border-4 border-transparent border-b-gray-200 pb-3">
                  <h3 className="text-base font-bold leading-6">
                    Detail produk
                  </h3>
                  {order_items.map((item) => (
                    <ProductInTransactionCard {...item} key={item.product.id} />
                  ))}
                </div>

                <div className="mt-2 flex flex-col gap-y-2 border-4 border-transparent border-b-gray-200 pb-3">
                  <h3 className="text-base font-bold leading-6">
                    Informasi pengiriman
                  </h3>
                  <div className="flex flex-row items-center justify-between">
                    <p>Kurir</p>
                    <p className="font-semibold">{delivery_method.name}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span>Alamat </span>
                    <div className="self-end text-end">
                      <p className="font-semibold">{user_details.name}</p>
                      <p>{user_details.phone}</p>
                      <p>{user_details.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex flex-col gap-y-2 border-4 border-transparent border-b-gray-200 pb-3">
                  <h3 className="text-base font-bold leading-6">
                    Rincian pembayaran
                  </h3>
                  <div className="flex flex-row items-center justify-between border border-transparent border-b-gray-100 pb-2">
                    <p>Metode pembayaran</p>
                    <p className="font-semibold">{payment_method}</p>
                  </div>
                  <div className="flex flex-col gap-y-1 border border-transparent border-b-gray-100 pb-2">
                    <div className="flex flex-row items-center justify-between">
                      <p>
                        Total harga <span> ({order_items.length} barang)</span>
                      </p>
                      <p>{`Rp. ${subTotal.toLocaleString("id-ID")}`}</p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p>Total ongkos kirim</p>
                      <p>{`Rp. ${delivery_method.price.toLocaleString(
                        "id-ID",
                      )}`}</p>
                    </div>
                    {promo_used && (
                      <div className="flex flex-row items-center justify-between">
                        <p>Total diskon barang</p>
                        <p>{`-Rp. ${promo_used.value?.toLocaleString(
                          "id-ID",
                        )}`}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-base font-semibold">Total belanja</p>
                    <p className="text-base font-semibold">{`Rp. ${total_price.toLocaleString(
                      "id-ID",
                    )}`}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-row gap-x-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-5/12 px-10 font-medium"
                    onClick={closeModal}
                  >
                    OK
                  </Button>
                  <Button
                    variant="primary"
                    className="w-full font-medium"
                    onClick={closeModal}
                  >
                    Tutup
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TransactionDetailsModal;
