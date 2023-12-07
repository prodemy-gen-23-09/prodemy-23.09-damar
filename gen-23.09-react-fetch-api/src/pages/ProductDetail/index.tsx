import { useParams } from "react-router-dom";
import ProductDetailDescription from "./ProductDescription";
import ProductDetailMedia from "./ProductMedia";
import ProductDetailOptions from "./ProductOptions";
import { getProductById } from "../../lib/swr/product";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, isLoading, isError } = getProductById(Number(productId));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;

  if (product !== undefined) {
    return (
      <main className="mx-auto mt-0 flex min-h-screen flex-col justify-center gap-y-5 xl:container md:mt-10 md:flex-row md:items-start md:gap-x-2 md:px-3 lg:mx-6 lg:gap-x-6 xl:mx-auto">
        <ProductDetailMedia
          productName={product.name}
          imageUrls={product.image}
        />
        <ProductDetailDescription productDetail={product} />
        <ProductDetailOptions productDetail={product} />
      </main>
    );
  } else return <div className="my-20 text-center">Product not found</div>;
};

export default ProductDetail;
