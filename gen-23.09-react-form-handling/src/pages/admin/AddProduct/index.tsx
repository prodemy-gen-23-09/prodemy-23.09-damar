import { ChangeEvent, useState } from "react";
import { ProductDataProps } from "../../../interfaces/interface";
import { ProductForm } from "../../../components/Form";

const AddProduct = () => {
  const [productData, setProductData] = useState<ProductDataProps>({
    name: "",
    price: 100000,
    images: [],
    description: "",
    stock: 1,
    category: "Sneakers",
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files);
      const imageUrls = selectedImages.map((image) => image.name);
      setProductData({ ...productData, images: imageUrls });
    }
  };

  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <main className="ms-64 flex min-h-screen flex-col ">
      <ProductForm
        productData={productData}
        title="Tambah Produk"
        handleImageOnChange={handleImageOnChange}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </main>
  );
};

export default AddProduct;
