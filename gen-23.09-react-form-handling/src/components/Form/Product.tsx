import { ChangeEvent } from "react";
import { Button } from "../Button";
import { ProductDataProps } from "../../interfaces/interface";

interface ProductFormProps {
  title?: string;
  productData: ProductDataProps;
  handleOnChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  handleImageOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
}

const ProductForm = ({
  title,
  productData,
  handleOnChange,
  handleImageOnChange,
  handleOnSubmit,
}: ProductFormProps) => {
  const { name, price, description, stock, category } = productData;
  return (
    <form
      onSubmit={handleOnSubmit}
      className="mb-10 mt-5 flex w-full flex-col self-center rounded-2xl border-gray-200 px-4 pb-10 pt-5 sm:mt-10 sm:w-[600px] sm:px-10 sm:pt-10 "
    >
      <h2 className="self-center text-2xl font-semibold">{title!}</h2>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="name">Nama Produk</label>
        <input
          className="rounded-xl border border-gray-300 px-4 py-2"
          onChange={handleOnChange}
          type="text"
          name="name"
          value={name}
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="price">Harga</label>
        <input
          className="rounded-xl border border-gray-300 px-4 py-2"
          onChange={handleOnChange}
          type="number"
          name="price"
          value={price}
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="image">Gambar</label>
        <input
          className="rounded-xl border border-gray-300 px-4 py-2"
          onChange={handleImageOnChange}
          type="file"
          name="images"
          multiple
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="description">Deskripsi</label>
        <textarea
          className="rounded-xl border border-gray-300 px-4 py-2"
          onChange={handleOnChange}
          name="description"
          value={description}
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="stock">Stok</label>
        <input
          className="rounded-xl border border-gray-300 px-4 py-2"
          onChange={handleOnChange}
          type="number"
          name="stock"
          value={stock}
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="category">Kategori</label>
        <select
          className="rounded-xl border border-gray-300 px-4 py-2"
          onChange={handleOnChange}
          name="category"
          value={category}
        >
          <option value="Sneakers">Sneakers</option>
          <option value="Running">Running</option>
          <option value="Casual">Casual</option>
        </select>
      </div>
      <div className="flex w-full">
        <Button
          variant="primary"
          type="submit"
          className="mx-auto mt-4 w-96 self-center"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
