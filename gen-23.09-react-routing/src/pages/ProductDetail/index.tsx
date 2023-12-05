import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { productsData } from "../../data/product";
import { Product } from "../../interfaces/interface";

import ProductDetailDescription from "./ProductDescription";
import ProductDetailMedia from "./ProductMedia";
import ProductDetailOptions from "./ProductOptions";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productDetail, setProductDetail] = useState<Product>();

  useEffect(() => {
    setProductDetail(
      productsData.find((product) => product.id === Number(productId)),
    );
  }, []);

  if (productDetail !== undefined) {
    return (
      <main className="mx-auto mt-0 flex min-h-screen flex-col justify-center gap-y-5 xl:container md:mt-10 md:flex-row md:items-start md:gap-x-2 md:px-3 lg:mx-6 lg:gap-x-6 xl:mx-auto">
        <ProductDetailMedia
          productName={productDetail.name}
          imageUrls={productDetail.image}
        />
        <ProductDetailDescription productDetail={productDetail} />
        <ProductDetailOptions productDetail={productDetail} />
      </main>
    );
  } else return <div className="my-20 text-center">Product not found</div>;
};

export default ProductDetail;
