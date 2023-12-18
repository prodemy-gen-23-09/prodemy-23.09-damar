import { FormEvent, Fragment, useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Button } from "../../../components/Button";
import { useAppSelector } from "../../../store/hooks";
import { DeliveryMethod } from "../../../interfaces/cartInterface";
import CheckoutCard from "../../../components/Card/CheckoutCard";

const Checkout = () => {
  const { checkoutData } = useAppSelector((state) => state.checkout);

  const { checkout_items, promo, total_price } = checkoutData;

  const [subTotal, setSubTotal] = useState(total_price);
  const [totalPrice, setTotalPrice] = useState(subTotal);

  const [totalDiscount, setTotalDiscount] = useState<number | string>(0);

  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod | null>(
    null,
  );
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

  const [paymentMethod, setPaymentMethod] = useState("");
  const paymentMethodOptions = [
    { name: "Gopay", value: "gopay", logo: "/assets/gopay-logo.png" },
    { name: "LinkAja", value: "link-aja", logo: "/assets/linkaja-logo.png" },
    { name: "DANA", value: "dana", logo: "/assets/dana-logo.png" },
  ];

  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(checkoutData);
  };

  useEffect(() => {
    if (deliveryMethod && paymentMethod && checkoutData) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  }, [deliveryMethod, paymentMethod]);

  useEffect(() => {
    checkoutData?.checkout_items &&
      setSubTotal(
        checkoutData.checkout_items.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0,
        ),
      );

    deliveryMethod
      ? setTotalPrice(subTotal + deliveryMethod.price)
      : setTotalPrice(subTotal);
  }, [checkoutData, deliveryMethod, subTotal]);

  useEffect(() => {
    let discount: number | string = 0;

    if (checkoutData.promo) {
      if (checkoutData.promo.category === "discount") {
        discount = subTotal * (checkoutData.promo.percentage! / 100);

        if (discount > checkoutData.promo.maxDiscount!) {
          discount = checkoutData.promo.maxDiscount!;
        }
      } else if (checkoutData.promo.category === "cashback") {
        discount = subTotal * (checkoutData.promo.percentage! / 100);

        if (discount > checkoutData.promo.maxDiscount!) {
          discount = checkoutData.promo.maxDiscount!;
        }
      } else if (checkoutData.promo.category === "free-ongkir") {
        discount = deliveryMethod?.price || "Gratis ongkir";
      }
    }

    setTotalDiscount(discount);
  }, [checkoutData]);

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-2 overflow-x-auto xl:container sm:mx-10 lg:mx-auto lg:mb-10">
      <div className="flex flex-col gap-y-5 rounded-xl py-3 sm:gap-x-10 md:flex-row lg:px-10">
        <div className="flex flex-1 flex-col gap-y-3 ">
          <h1 className="px-1 text-2xl font-extrabold">Keranjang</h1>
          <ul className="flex flex-col gap-y-5">
            {checkout_items && checkout_items.length > 0 ? (
              checkout_items.map((item, index) => (
                <li key={index}>
                  <CheckoutCard
                    product={item.product}
                    quantity={item.quantity}
                  />
                </li>
              ))
            ) : (
              <p className="h-full self-center">Keranjang kosong</p>
            )}
          </ul>
        </div>
        {checkout_items && checkout_items.length > 0 && (
          <form
            className="sticky top-1 flex h-fit flex-col gap-y-2 rounded-xl border border-gray-200 p-5 md:w-4/12"
            onSubmit={(e) => handleOnSubmit(e)}
          >
            <h2 className="text-lg font-semibold">Ringkasan Belanja</h2>
            <div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm font-medium">
                  Total Harga{" "}
                  <span className="ms-1 text-xs font-medium">
                    ({checkout_items.length + " produk"})
                  </span>
                </p>
                <p className="font-medium">
                  {"Rp. " + subTotal.toLocaleString("id-ID")}
                </p>
              </div>
              {checkoutData.promo && (
                <div className="flex flex-row items-center justify-between text-sm">
                  <p className="font-medium">
                    Promo {promo?.category !== "free-ongkir" && <span className="text-xs">({promo?.name})</span>}{" "}
                  </p>

                  {promo && promo.category === "free-ongkir" ? (
                    <p>Gratis Ongkir</p>
                  ) : (
                    <p className="font-medium">
                      {"-Rp. " + totalDiscount.toLocaleString("id-ID")}
                    </p>
                  )}
                </div>
              )}
              {deliveryMethod && (
                <div className="flex flex-row items-center justify-between text-sm">
                  <p className="font-medium">Biaya Pengiriman</p>
                  {promo && promo.category === "free-ongkir" ? (
                    <s className="text font-medium">Rp. 0</s>
                  ) : (
                    <p className="font-medium">
                      {"Rp. " + deliveryMethod.price.toLocaleString("id-ID")}
                    </p>
                  )}
                </div>
              )}

              <div className="mt-3 flex flex-row items-center justify-between border border-transparent border-y-gray-200 py-2 text-lg font-bold">
                <p>Total Belanja</p>
                <p>{"Rp. " + totalPrice.toLocaleString("id-ID")}</p>
              </div>
            </div>
            <RadioGroup
              value={deliveryMethod}
              onChange={setDeliveryMethod}
              className="pb-2"
            >
              <RadioGroup.Label className="text-sm">
                Metode Pengiriman
              </RadioGroup.Label>
              {deliveryMethodOptions.map((option) => (
                <RadioGroup.Option
                  key={option.name}
                  as={Fragment}
                  value={option}
                >
                  <div
                    className={`mt-2 flex flex-row items-center justify-between rounded-xl border border-gray-200 px-5 py-2 hover:cursor-pointer ${
                      deliveryMethod?.value === option.value
                        ? "bg-primary text-white"
                        : ""
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
                      <div className="flex w-full flex-row justify-between">
                        <p className="text-sm font-semibold">{option.name}</p>
                        <img
                          src={option.logo}
                          alt={option.name}
                          className="ml-2 h-5"
                        />
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
              disabled={buttonIsDisabled}
            >
              Bayar
            </Button>
          </form>
        )}
      </div>
    </main>
  );
};

export default Checkout;
