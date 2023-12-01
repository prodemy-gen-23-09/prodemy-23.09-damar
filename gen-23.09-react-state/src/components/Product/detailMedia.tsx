import { Product } from "../../types/interface";

interface ProductMediaProps {
  productDetail: Product;
  imageUrls?: string[];
}

const ProductDetailMedia = ({ productDetail }: ProductMediaProps) => {
  return (
    <img
      src={productDetail.image}
      alt={productDetail.name}
      className="w-full md:w-3/12 md:rounded-lg"
    />
  );
};

export default ProductDetailMedia;
