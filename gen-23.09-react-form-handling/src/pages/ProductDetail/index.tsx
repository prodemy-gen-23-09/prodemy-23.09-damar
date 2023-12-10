import { Link, useParams } from "react-router-dom";
import ProductDetailDescription from "./ProductDescription";
import ProductDetailMedia from "./ProductMedia";
import ProductDetailOptions from "./ProductOptions";
import { getProductById } from "../../lib/swr/product";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, isLoading, isError } = getProductById(Number(productId));

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div className="my-20 text-center">Product not found</div>;

  if (product)
    return (
      <div className="mb-5 mt-6 flex min-h-screen flex-col xl:container lg:mx-6  xl:mx-auto">
        <div className="hidden flex-row items-center gap-x-2 text-sm text-gray-500 md:flex">
          <Link to="/" className="text-primary hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <Link
            to={`/search?q=${product.category[0]}`}
            className="text-primary hover:text-accent"
          >
            {product.category[0]}
          </Link>
          <span>/</span>
          <p>{product.name}</p>
        </div>

        <main className="mx-auto mt-0 flex flex-col justify-center gap-y-5 md:mt-8 md:flex-row md:items-start md:gap-x-2 md:px-3 lg:gap-x-6">
          <ProductDetailMedia
            productName={product.name}
            imageUrls={product.image}
          />
          <ProductDetailDescription productDetail={product} />
          <ProductDetailOptions productDetail={product} />
        </main>
      </div>
    );
};

export default ProductDetail;
