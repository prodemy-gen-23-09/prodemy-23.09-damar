import { FormEvent, Fragment, useEffect, useState } from "react";
import { CartCard } from "../../../components/Card";
import { RadioGroup } from "@headlessui/react";
import { Button } from "../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getCart } from "../../../lib/swr/cartSWR";
import { fetchProduct } from "../../../lib/axios/productAxios";
import {
  CartDetails,
  CartPayload,
  Promos,
} from "../../../interfaces/cartInterface";
import { setCheckoutFormCart } from "../../../store/slices/checkoutSlice";
import { useNavigate } from "react-router-dom";
import { deleteProductFromCart } from "../../../lib/axios/cartAxios";

const Cart = () => {
  const { user: userData } = useAppSelector((state) => state.auth);
  const { data: cartData, isError, isLoading, mutate } = getCart(userData?.id);

  const handleRemoveFromCart = (cartId: number) => {
    deleteProductFromCart(cartId);
    mutate();
  };

  const [cartDetails, setCartDetails] = useState<CartDetails[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [promo, setPromo] = useState<Promos | null>(null);
  const promoOptions: Promos[] = [
    {
      name: "Diskon 15% (maks. 80rb)",
      category: "discount",
      percentage: 15,
      maxDiscount: 80000,
    },
    {
      name: "Cashback 20% (maks. 100rb)",
      category: "cashback",
      percentage: 20,
      maxDiscount: 100000,
    },
    { name: "Free Ongkir", category: "free-ongkir" },
  ];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const checkoutDetails = cartDetails.map((item) => ({
      cartId: item.cartId,
      product: item.product,
      quantity: item.quantity,
    }));

    const payload: CartPayload = {
      userId: userData?.id,
      promo: promo,
      checkout_items: checkoutDetails,
      total_price: totalPrice,
    };

    dispatch(setCheckoutFormCart(payload));
    navigate("/checkout");
  };

  useEffect(() => {
    cartDetails &&
      setTotalPrice(
        cartDetails.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0,
        ),
      );
  }, [cartDetails]);

  useEffect(() => {
    if (cartData && cartData.length > 0) {
      Promise.all(
        cartData.map(async (item) => {
          return fetchProduct(
            `http://localhost:8080/products/${item.productId}`,
          ).then((res) => ({
            cartId: item.id,
            product: res,
            quantity: item.quantity,
          }));
        }),
      ).then((resolvedCartItems) => {
        setCartDetails(resolvedCartItems);
      });
    } else {
      setCartDetails([]);
    }
  }, [cartData]);

  useEffect(() => {
    mutate();
  }, []);

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-2 overflow-x-auto xl:container sm:mx-10 lg:mx-auto lg:mb-10">
      <div className="flex flex-col gap-y-5 rounded-xl py-3 sm:gap-x-10 md:flex-row lg:px-10">
        <div className="flex flex-1 flex-col gap-y-3 ">
          <h1 className="px-1 text-2xl font-extrabold">Keranjang</h1>
          <ul className="flex flex-col gap-y-5">
            {cartDetails && cartDetails.length > 0 ? (
              cartDetails.map((item) => (
                <li key={item.cartId}>
                  <CartCard
                    product={item.product}
                    quantity={item.quantity}
                    cartId={item.cartId}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                </li>
              ))
            ) : (
              <p className="h-full self-center">Keranjang kosong</p>
            )}
          </ul>
        </div>
        {cartDetails && cartDetails.length > 0 && (
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
                    ({cartDetails.length + " produk"})
                  </span>
                </p>
                <p className="font-medium">
                  {"Rp. " + totalPrice.toLocaleString("id-ID")}
                </p>
              </div>
              {promo && (
                <div className="mt-1 flex flex-row items-center justify-between">
                  <p className="text-sm font-medium">Promo</p>
                  <p className="text-sm">{promo.name}</p>
                </div>
              )}
              <div className=" border border-transparent border-b-gray-200 pb-2"></div>

              <RadioGroup
                value={promo}
                onChange={setPromo}
                className="mt-2 pb-2"
              >
                <RadioGroup.Label className="text-md font-semibold">
                  Promo
                </RadioGroup.Label>
                {promoOptions.map((option) => (
                  <RadioGroup.Option
                    key={option.name}
                    as={Fragment}
                    value={option}
                  >
                    <div
                      className={`mt-2 flex flex-row items-center justify-between rounded-xl border border-accent px-5 py-2 text-primary hover:cursor-pointer ${
                        promo?.name === option.name
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      <div>
                        <p className="text-sm font-semibold">{option.name}</p>
                      </div>
                    </div>
                  </RadioGroup.Option>
                ))}
              </RadioGroup>

              <div className="mt-3 flex flex-row items-center justify-between border border-transparent border-y-gray-200 py-2 text-lg font-bold">
                <p>Total Belanja</p>
                <p>{"Rp. " + totalPrice.toLocaleString("id-ID")}</p>
              </div>
            </div>
            <Button
              variant="primary"
              className={`mt-2 w-full disabled:bg-gray-100 disabled:hover:cursor-not-allowed`}
              type="submit"
            >
              Checkout
            </Button>
          </form>
        )}
      </div>
    </main>
  );
};

export default Cart;
