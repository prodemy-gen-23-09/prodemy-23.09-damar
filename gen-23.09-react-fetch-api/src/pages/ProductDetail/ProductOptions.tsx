import { ProductDetailProps } from "../../interfaces/interface";
import { IconButton } from "../../components/Button";
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
      <div className="hidden w-3/12 flex-col gap-y-5 rounded-lg border border-gray-300 p-4 md:flex">
        <h4 className="text-lg font-bold">Atur jumlah dan catatan</h4>
        <div className="flex flex-row items-center gap-x-3 border border-transparent border-b-gray-100 pb-3">
          <img src={image[0]} alt="PC Thumbnail" className="w-16 rounded-lg" />
          <p className="line-clamp-2 h-fit lg:text-base xl:text-lg">{name}</p>
        </div>
        <div className="flex flex-row items-center justify-start md:gap-x-2 lg:gap-x-3">
          <IconButton
            icon={<AiOutlineMinus />}
            onClick={handleDecrement}
            disabled={isDecrementButtonDisabled}
          />
          <input
            className="h-fit md:w-12 lg:w-20 self-center rounded-lg border md:px-2 lg:px-3 py-0.5 text-center outline-none"
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
          <button className="rounded-lg bg-primary p-2 font-bold text-white hover:bg-accent">
            <span>&#43;</span> Keranjang
          </button>
          <button className="rounded-lg p-2 font-bold text-primary outline outline-1 outline-secondary hover:bg-accent hover:text-white">
            Beli Langsung
          </button>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 z-10 flex w-full flex-row justify-between gap-x-4 border border-t-green-500 bg-white p-3 md:hidden">
        <button className="flex-1 rounded-lg p-2 font-bold text-primary outline outline-1 outline-secondary hover:bg-accent hover:text-white">
          Beli Langsung
        </button>
        <button className="flex-1 rounded-lg bg-primary p-2 font-bold text-white hover:bg-accent">
          <span>&#43;</span> Keranjang
        </button>
      </div>
    </>
  );
};

export default ProductDetailOptions;
