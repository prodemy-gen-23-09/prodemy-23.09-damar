import { Link } from "react-router-dom";
import { ProductCardProps } from "../../interfaces/interface";

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image, toko, createdAt } = product;

  return (
    <Link
      className="product-card flex h-fit cursor-pointer flex-col gap-1 rounded-lg border border-gray-300 p-4 pb-6 hover:shadow-md"
      key={id}
      to={"/products/" + id}
    >
      <p className="self-end text-sm text-gray-500">
        {createdAt?.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })}
      </p>
      <img className="h-40 w-40 self-center" src={image[0]} alt={name} />
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
