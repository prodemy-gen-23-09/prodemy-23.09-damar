import { ChangeEvent, useRef, useState } from "react";
import { ProductForm } from "../../../components/Form";
import { ProductRequest, ProductSchema } from "../../../interfaces/product";
import { updateProduct } from "../../../lib/axios/product";
import { getProductById } from "../../../lib/swr/product";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [productImages, setProductImages] = useState<String[]>([]);
  const { productId } = useParams<{ productId: string }>();

  const { product, isLoading, isError } = getProductById(Number(productId));

  const formRef = useRef<HTMLFormElement>(null);

  const handleImageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageUrls = Array.from(e.target.files).map((image) => image.name);
      setProductImages(imageUrls);
    }
  };

  const handleOnSubmit = async (data: ProductSchema) => {
    const toko = {
      name: "Tokoungu Official",
      rating: 4.9,
      location: "Jakarta Barat",
    };

    const payload: ProductRequest = {
      ...data,
      toko: toko,
      images: productImages,
      createdAt: new Date().toISOString(),
    };

    await updateProduct(Number(productId), payload)
      .then((res) => console.log(res))
      .finally(() => {
        if (formRef.current) formRef.current.reset();
        setProductImages([]);
      });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <ProductForm
        title="Edit Produk"
        formRef={formRef}
        initialValues={product}
        handleImageOnChange={handleImageOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </main>
  );
};

export default EditProduct;
