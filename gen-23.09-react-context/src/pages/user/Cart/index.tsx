import { FormEvent, Fragment, useEffect, useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import { CartCard } from "../../../components/Card";
import { RadioGroup } from "@headlessui/react";
import { Button } from "../../../components/Button";

const Cart = () => {
  const { cart } = useCartContext();
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const deliveryMethodOptions = [
    { name: "JNT", value: "jnt", estimation: "1-2 hari", price: 11000 },
    {
      name: "Si Cepat",
      value: "sicepat",
      estimation: "1-2 hari",
      price: 12000,
    },
    {
      name: "Gosend",
      value: "gosend",
      estimation: "hari ini",
      price: 45000,
    },
  ];

  const paymentMethodOptions = [
    { name: "Gopay", value: "gopay" },
    { name: "Link Aja", value: "link-aja" },
    { name: "OVO", value: "ovo" },
  ];

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      cartItem: cart,
      deliveryMethod,
      paymentMethod,
    };

    console.log(payload);
  };

  useEffect(() => {
    if (deliveryMethod && paymentMethod && cart.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [deliveryMethod, paymentMethod]);

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-2 overflow-x-auto xl:container sm:mx-10 lg:mx-auto lg:mb-10">
      <div className="flex flex-row gap-x-10 rounded-xl py-3 lg:px-10">
        <div className="flex flex-1 flex-col  gap-y-3 ">
          <h1 className="px-1 text-2xl font-extrabold">Keranjang</h1>
          <ul className="flex flex-col gap-y-5">
            {cart.length > 0 ? (
              cart?.map((item) => (
                <li key={item.product.id}>
                  <CartCard product={item.product} quantity={item.quantity} />
                </li>
              ))
            ) : (
              <p className="h-full self-center">Keranjang kosong</p>
            )}
          </ul>
        </div>
        <form
          className="flex w-4/12 flex-col gap-y-2 rounded-xl border border-gray-200 p-5"
          onSubmit={(e) => handleOnSubmit(e)}
        >
          <h2 className="text-lg font-semibold">Ringkasan Belanja</h2>
          <div className="flex flex-row items-center justify-between border border-transparent border-b-gray-200 pb-3">
            <p className="font-bold">Total Harga</p>
            <p className="text-lg font-bold">
              {"Rp. " +
                cart
                  ?.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0,
                  )
                  .toLocaleString("id-ID")}
            </p>
          </div>
          <RadioGroup
            value={deliveryMethod}
            onChange={setDeliveryMethod}
            className="border border-transparent border-b-gray-100 pb-2"
          >
            <RadioGroup.Label className="text-sm">
              Metode Pengiriman
            </RadioGroup.Label>
            {deliveryMethodOptions.map((option) => (
              <RadioGroup.Option
                key={option.name}
                as={Fragment}
                value={option.value}
              >
                {({ checked }) => (
                  <div
                    className={`mt-2 flex flex-row items-center justify-between rounded-xl border border-gray-200 px-5 py-2 hover:cursor-pointer ${
                      checked ? "bg-primary text-white" : ""
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold">{option.name}</p>
                      <span className="text-xs">
                        {"Estimasi tiba " + option.estimation}
                      </span>
                    </div>
                    <p className="text-sm">
                      {"Rp. " + option.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
          <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
            <RadioGroup.Label className="text-sm">
              Metode Pembayaran
            </RadioGroup.Label>
            {paymentMethodOptions.map((option) => (
              <RadioGroup.Option
                key={option.name}
                as={Fragment}
                value={option.value}
              >
                {({ checked }) => (
                  <div
                    className={`mt-2 flex flex-row items-center justify-between rounded-xl border border-gray-200 px-5 py-2 hover:cursor-pointer ${
                      checked ? "bg-primary text-white" : ""
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold">{option.name}</p>
                    </div>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
          <Button
            variant="primary"
            className={`mt-2 w-full disabled:bg-gray-100 disabled:hover:cursor-not-allowed`}
            type="submit"
            disabled={isDisabled}
          >
            Bayar
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Cart;
