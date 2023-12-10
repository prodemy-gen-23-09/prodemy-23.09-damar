import { ChangeEvent, useRef, useState } from "react";
import { ProductForm } from "../../../components/Form";
import { ProductRequest, ProductSchema } from "../../../interfaces/interface";
import { addProduct } from "../../../lib/axios/product";

const AddProduct = () => {
  const [productImages, setProductImages] = useState<String[]>([]);

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

    await addProduct(payload)
      .then((res) => console.log(res))
      .finally(() => {
        if (formRef.current) formRef.current.reset();
        setProductImages([]);
      });
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <ProductForm
        title="Tambah Produk"
        formRef={formRef}
        handleImageOnChange={handleImageOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </main>
  );
};

export default AddProduct;
