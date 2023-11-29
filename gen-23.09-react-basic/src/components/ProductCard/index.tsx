import { Product } from "../../types/interface";

const ProductCard = ({ id, name, price, image, toko }: Product) => {
  return (
    <div
      className="product-card h-fit flex flex-col border border-gray-300 p-4 pb-6 gap-1 rounded-lg hover:shadow-md cursor-pointer"
      key={id}
    >
      <img className="self-center w-40 h-40" src={image} alt={name} />
      <h3 className="line-clamp-1 font-semibold">{name}</h3>
      <p className="text-gray-400 text-sm">{toko.name}</p>
      <p className="font-bold text-lg mt-2">
        {"Rp. " + price.toLocaleString("id-ID")}
      </p>
    </div>
  );
};

export default ProductCard;
