import { ProductDetailProps } from "../../types/interface";
import { IconButton } from "../Button";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductDetailOptions = ({ productDetail }: ProductDetailProps) => {
  const [quantityValue, setQuantityValue] = useState(1);
  const { name, image, stock, price } = productDetail;

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
      <div className="hidden md:flex flex-col gap-y-5 w-3/12 p-4 border border-gray-300 rounded-lg">
        <h4 className="text-lg font-bold">Atur jumlah dan catatan</h4>
        <div className="flex flex-row gap-x-3 border border-transparent pb-3 items-center border-b-gray-100">
          <img src={image[0]} alt="PC Thumbnail" className="w-16 rounded-lg" />
          <p className="line-clamp-2 h-fit lg:text-base xl:text-lg">{name}</p>
        </div>
        <div className="flex flex-row gap-x-3 justify-start items-center">
          <IconButton
            icon={<AiOutlineMinus />}
            onClick={handleDecrement}
            disabled={isDecrementButtonDisabled}
          />
          <input
            className="h-fit w-20 px-3 self-center py-0.5 outline-none border rounded-lg text-center"
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
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm lg:text-md text-gray-500">Subtotal</p>
          <p className="text-md lg:text-lg font-bold">
            {"Rp. " + (quantityValue * price).toLocaleString("id-ID")}
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <button className="bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg font-bold">
            <span>&#43;</span> Keranjang
          </button>
          <button className="outline outline-1 outline-green-500 text-green-500 p-2 rounded-lg font-bold">
            Beli Langsung
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-x-4 p-3 sticky w-full bottom-0 left-0 z-10 bg-white border border-t-green-500 md:hidden">
        <button className="flex-1 outline outline-1 outline-green-500 text-green-500 p-2 rounded-lg font-bold">
          Beli Langsung
        </button>
        <button className="flex-1 bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg font-bold">
          <span>&#43;</span> Keranjang
        </button>
      </div>
    </>
  );
};

export default ProductDetailOptions;
