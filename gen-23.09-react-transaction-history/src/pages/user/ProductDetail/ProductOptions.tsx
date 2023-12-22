import { ProductDetailProps } from "../../../interfaces/productInterface";
import { Button, IconButton } from "../../../components/Button";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store";
import {
  addProductToCart,
  updateProductQuantityInCart,
} from "../../../lib/axios/cartAxios";
import { getCart } from "../../../lib/swr/cartSWR";
import {
  createWishlist,
  deleteWishlist,
} from "../../../lib/axios/wishlistAxios";
import { AddWishlistOrCartModal } from "../../../components/Modal";
import { getWishlist } from "../../../lib/swr/wishlistSWR";

const ProductDetailOptions = ({ productDetail }: ProductDetailProps) => {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.accessToken !== "",
  );
  const { user: userData } = useAppSelector((state: RootState) => state.auth);
  const { data: cartData } = getCart(userData?.id);
  const { wishlist: wishlistData } = getWishlist(userData?.id);
  const { name, images, stock, price } = productDetail;

  const [quantityValue, setQuantityValue] = useState(1);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);

  const [itemAlreadyInWishlist, setItemAlreadyInWishlist] = useState(
    wishlistData?.find((item) => item.productId === productDetail.id),
  );

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeWishlistModal = () => {
    setIsWishlistModalOpen(false);
  };

  const openWishlistModal = () => {
    setIsWishlistModalOpen(true);
  };

  // const dispatch = useAppDispatch();

  const handleWishlist = async () => {
    if (itemAlreadyInWishlist !== undefined) {
      await deleteWishlist(itemAlreadyInWishlist.id!).then(() => {
        setItemAlreadyInWishlist(undefined);
      });
      return;
    }

    const payload = {
      userId: userData?.id,
      productId: productDetail.id,
    };

    await createWishlist(payload).then((res) => {
      openWishlistModal();
      setItemAlreadyInWishlist(res);
    });
  };

  const handleAddProductToCart = async ({ productId, quantity }: any) => {
    const payload = {
      userId: userData.id,
      productId,
      quantity,
    };

    const itemExisting = cartData?.find((item) => item.productId === productId);

    if (itemExisting) {
      if (itemExisting.quantity + quantity > stock) {
        return;
      }

      await updateProductQuantityInCart({
        cartItemId: itemExisting.id,
        quantity: itemExisting.quantity + quantity,
      }).then(() => {
        openCartModal();
      });
      return;
    }

    await addProductToCart(payload).then(() => {
      openCartModal();
    });
    // dispatch(addProductToCart(payload));
  };

  const [isDecrementButtonDisabled, setIsDecrementButtonDisabled] =
    useState(false);
  const [isIncrementButtonDisabled, setIsIncrementButtonDisabled] =
    useState(false);

  useEffect(() => {
    if (quantityValue >= 1 && quantityValue <= stock) {
      setIsDecrementButtonDisabled(false);
      setIsIncrementButtonDisabled(false);
    }

    if (quantityValue <= 1) {
      setIsDecrementButtonDisabled(true);
    } else if (quantityValue >= stock) {
      setIsIncrementButtonDisabled(true);
    }
  }, [quantityValue]);

  const handleIncrement = () => {
    if (quantityValue < stock) {
      setQuantityValue(quantityValue + 1);
    }
  };

  const handleDecrement = () => {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value <= stock) {
      setQuantityValue(value);
    } else {
      setQuantityValue(stock);
    }
  };

  return (
    <>
      <div className="sticky top-32 hidden w-3/12 flex-col gap-y-5 rounded-lg border border-gray-200 p-4 md:flex">
        <h4 className="text-lg font-bold">Atur jumlah dan catatan</h4>
        <div className="flex flex-row items-center gap-x-3 border border-transparent border-b-gray-100 pb-3">
          <img src={images[0]} alt="PC Thumbnail" className="w-16 rounded-lg" />
          <p className="line-clamp-2 h-fit lg:text-base xl:text-lg">{name}</p>
        </div>
        <div className="flex flex-row items-center justify-start md:gap-x-2 lg:gap-x-3">
          <IconButton
            icon={<AiOutlineMinus />}
            onClick={handleDecrement}
            disabled={isDecrementButtonDisabled}
          />
          <input
            className="h-fit self-center rounded-lg border border-gray-200 py-0.5 text-center outline-none md:w-12 md:px-2 lg:w-20 lg:px-3 xl:w-24"
            value={quantityValue}
            type="number"
            onChange={(e) => handleOnChange(e)}
          />
          <IconButton
            icon={<AiOutlinePlus />}
            onClick={handleIncrement}
            disabled={isIncrementButtonDisabled}
          />
          <p className="text-sm lg:text-base">
            Stok: <span className="font-bold">{stock}</span>
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="lg:text-md text-sm text-gray-500">Subtotal</p>
          <p className="text-md font-bold lg:text-lg">
            {"Rp. " + (quantityValue * price).toLocaleString("id-ID")}
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <Button
            disabled={!isLoggedIn}
            variant="primary"
            className="w-full disabled:bg-primary disabled:opacity-25 hover:disabled:cursor-not-allowed"
            onClick={() => {
              handleAddProductToCart({
                productId: productDetail.id,
                quantity: quantityValue,
              });
            }}
          >
            <span>&#43;</span> Keranjang
          </Button>
          <AddWishlistOrCartModal
            isOpen={isCartModalOpen}
            closeModal={closeCartModal}
            type="cart"
          />
          <Button
            variant="outline"
            className="flex w-full flex-row items-center justify-center disabled:hidden"
            disabled={!isLoggedIn}
            onClick={handleWishlist}
          >
            <AiOutlineHeart />
            {itemAlreadyInWishlist
              ? "Hapus dari wishlist"
              : "Tambah ke wishlist"}
          </Button>
          <AddWishlistOrCartModal
            isOpen={isWishlistModalOpen}
            closeModal={closeWishlistModal}
            type="wishlist"
          />
        </div>
      </div>
      <div className="sticky bottom-0 left-0 z-10 flex w-full flex-row justify-between gap-x-4 border border-t-green-500 bg-white p-3 md:hidden">
        <Button className="flex-1" variant="outline">
          <span>&#43;</span> Beli Langsung
        </Button>
        <Button className="flex-1" variant="primary">
          <span>&#43;</span> Keranjang
        </Button>
      </div>
    </>
  );
};

export default ProductDetailOptions;
