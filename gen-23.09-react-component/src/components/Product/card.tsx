import { ProductCardProps } from "../../types/interface";

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { id, name, price, image, toko } = product;
  
  return (
    <div
      className="product-card h-fit flex flex-col border border-gray-300 p-4 pb-6 gap-1 rounded-lg hover:shadow-md cursor-pointer"
      key={id}
      onClick={() => onClick(id)}
    >
      <img className="self-center w-40 h-40" src={image} alt={name} />
      <h3 className="line-clamp-1 font-sm md:font-md lg:font-lg font-semibold">{name}</h3>
      <p className="text-gray-400 font-sm md:font-md lg:font-lg ">{toko.name}</p>
      <p className="font-bold text-md md:text-lg mt-2">
        {"Rp. " + price.toLocaleString("id-ID")}
      </p>
    </div>
  );
};

export default ProductCard;
