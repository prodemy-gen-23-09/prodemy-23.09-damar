import { AiOutlineDelete } from "react-icons/ai";
import { Product } from "../../interfaces/productInterface";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartCard = ({ product, quantity }: CartItemProps) => {
  const navigate = useNavigate();
  const { removeFromCart } = useCartContext();

  return (
    <div className="flex flex-row items-center gap-x-5 rounded-xl border border-gray-200 px-10 py-5">
      <img
        src={product.images[0]}
        alt={product.name}
        className="me-5 h-20 rounded-xl"
      />
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col">
          <h2
            className="text-base hover:cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            {product.name}
          </h2>
          <p className="text-xs text-gray-500">{product.toko.name}</p>
          <p className="mt-1 font-semibold">
            {"Rp. " + product.price.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <IconContext.Provider value={{ size: "100%" }}>
            <button className="h-8" onClick={() => removeFromCart(product.id)}>
              <AiOutlineDelete />
            </button>
          </IconContext.Provider>
          <p className="text-center text-sm">Jumlah : {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
