import { Fragment, useState } from "react";
import { TransactionResponse } from "../../interfaces/checkoutInterface";
import { Button } from "../Button";
import { Dialog, Transition } from "@headlessui/react";
import ProductInTransactionCard from "./OrderCard";

const TransactionCard = (transaction: TransactionResponse) => {
  const {
    id,
    payment_method,
    delivery_method,
    user_details,
    order_date,
    total_price,
    order_items,
    promo_used,
  } = transaction;
  const { product } = order_items[0];

  const subTotal = order_items.reduce((acc, curr) => acc + curr.sub_total, 0);

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
                      <ProductInTransactionCard
                        {...item}
                        key={item.product.id}
                      />
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
                          Total harga{" "}
                          <span> ({order_items.length} barang)</span>
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
                    <Button variant="primary" className="w-full font-medium" onClick={closeModal}>
                      Tutup
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default TransactionCard;
