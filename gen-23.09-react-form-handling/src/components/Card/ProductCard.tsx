import { Link } from "react-router-dom";
import { ProductCardProps } from "../../interfaces/productInterface";

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, images, toko, createdAt } = product;

  return (
    <Link
      className="product-card flex h-fit cursor-pointer flex-col gap-1 rounded-lg border border-gray-300 p-4 pb-6 hover:shadow-md"
      key={id}
      to={"/products/" + id}
    >
      <span className="self-end text-sm text-gray-500">
        {new Date(createdAt).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })}
      </span>
      <img className="h-40 w-40 self-center" src={images[0]} alt={name} />
      <h3 className="line-clamp-1 text-sm font-semibold md:text-base">
        {name}
      </h3>
      <p className="text-sm text-gray-400 ">{toko.name}</p>
      <p className="text-md mt-2 font-bold md:text-lg">
        {"Rp. " + price.toLocaleString("id-ID")}
      </p>
    </Link>
  );
};

export default ProductCard;
