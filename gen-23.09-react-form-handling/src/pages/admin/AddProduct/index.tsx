import { ChangeEvent, useState } from "react";
import { ProductForm } from "../../../components/Form";
import { ProductSchema } from "../../../interfaces/interface";

const AddProduct = () => {
  const [productImages, setProductImages] = useState<String[]>([]);

  const handleImageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files);
      const imageUrls = selectedImages.map((image) => image.name);
      setProductImages(imageUrls);
    }
  };

  const handleOnSubmit = (data: ProductSchema) => {
    const toko = {
      name: "Tokoungu Official",
      rating: 4.9,
      location: "Jakarta Barat",
    };

    const fullData = { ...data, toko: toko, images: productImages };

    console.log(fullData);
  };

  return (
    <main className="ms-64 flex min-h-screen flex-col ">
      <ProductForm
        title="Tambah Produk"
        handleImageOnChange={handleImageOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </main>
  );
};

export default AddProduct;
