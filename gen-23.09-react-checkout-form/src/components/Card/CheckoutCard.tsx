import { useNavigate } from "react-router-dom";
import { CheckoutItem } from "../../interfaces/cartInterface";

const CheckoutCard = ({ product, quantity }: CheckoutItem) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center gap-x-5 rounded-xl border border-gray-200 px-10 py-5">
      <div className="me-5 sm:w-24 md:w-32">
        <img
          src={product?.images[0]}
          alt={product?.name}
          className="h-20 rounded-xl"
        />
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col">
          <h2
            className="line-clamp-1 text-base hover:cursor-pointer"
            onClick={() => navigate(`/products/${product?.id}`)}
          >
            {product?.name}
          </h2>
          <p className="text-xs text-gray-500">{product?.toko.name}</p>
          <p className="mt-1 font-semibold">
            {"Rp. " + product?.price.toLocaleString("id-ID")}
          </p>
        </div>
        <p className="text-center text-sm font-medium">Jumlah : {quantity}</p>
      </div>
    </div>
  );
};

export default CheckoutCard;
