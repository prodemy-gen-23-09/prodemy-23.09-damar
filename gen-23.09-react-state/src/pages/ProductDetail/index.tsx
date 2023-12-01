import {
  ProductDetailDescription,
  ProductDetailMedia,
  ProductDetailOptions,
} from "../../components/Product";
import { productsData } from "../../data/data";

const ProductDetail = () => {
  const productDetail = productsData[0];

  return (
    <main className="min-h-screen flex flex-col md:flex-row justify-center gap-y-5 md:items-start md:gap-x-2 lg:gap-x-6 xl:container md:px-3 mx-auto lg:mx-6 xl:mx-auto mt-0 md:mt-10">
      <ProductDetailMedia
        productName={productDetail.name}
        imageUrls={productDetail.image}
      />
      <ProductDetailDescription productDetail={productDetail} />
      <ProductDetailOptions productDetail={productDetail} />
    </main>
  );
};

export default ProductDetail;
