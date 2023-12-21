import { ChangeEvent, useRef, useState } from "react";
import { ProductForm } from "../../../../components/Form";
import {
  UpdateProductRequest,
  ProductSchema,
} from "../../../../interfaces/productInterface";
import { updateProduct } from "../../../../lib/axios/productAxios";
import { getProductById } from "../../../../lib/swr/productSWR";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [productImages, setProductImages] = useState<String[]>([]);
  const { productId } = useParams<{ productId: string }>();

  const { product, isLoading, isError } = getProductById(Number(productId));

  const formRef = useRef<HTMLFormElement>(null);

  const handleImageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageUrls = Array.from(e.target.files).map((image) =>
        URL.createObjectURL(image),
      );
      setProductImages(imageUrls);
    }
  };

  const handleOnSubmit = async (data: ProductSchema) => {
    const toko = {
      name: "Tokoungu Official",
      rating: 4.9,
      location: "Jakarta Barat",
    };

    let payload: UpdateProductRequest;

    if (productImages.length > 0) {
      payload = {
        ...data,
        toko: toko,
        images: productImages,
        createdAt: new Date().toISOString(),
      };
    } else {
      payload = {
        ...data,
        toko: toko,
        createdAt: new Date().toISOString(),
      };
    }

    await updateProduct(Number(productId), payload)
      .then((res) => {
        console.log(res);
        alert("Produk berhasil diupdate");
      })
      .finally(() => {
        if (formRef.current) formRef.current.reset();
        setProductImages([]);
      });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <main className="flex min-h-screen flex-col">
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
