import { ChangeEvent, RefObject } from "react";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductSchema } from "../../interfaces/productInterface";

interface ProductFormProps {
  title?: string;
  handleImageOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  initialValues?: ProductSchema;
  formRef?: RefObject<HTMLFormElement>;
  handleOnSubmit: (data: ProductSchema) => void;
}

const ProductForm = ({
  title,
  initialValues,
  formRef,
  handleImageOnChange,
  handleOnSubmit,
}: ProductFormProps) => {
  const productSchema: yup.ObjectSchema<ProductSchema> = yup.object().shape({
    name: yup.string().required("nama produk harus diisi"),
    price: yup
      .number().typeError("harga produk harus berupa angka")
      .positive("atus masa harga produk dibawah 0 ;'(")
      .required("harga produk harus diisi"),
    description: yup.string().required("deskripsi produk harus diisi"),
    stock: yup
      .number().typeError("stok produk harus berupa angka")
      .positive("stok produk gabisa dibawah 0, gabisa dijual nanti :)")
      .required("stok produk harus diisi"),
    category: yup.string().required("pilih salah satu kategori produk"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: initialValues !== undefined ? initialValues : {},
  });

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      ref={formRef}
      className="mb-10 mt-5 flex w-full flex-col self-center rounded-2xl border border-gray-200 bg-white px-4 pb-10 pt-5 shadow-md sm:w-[600px] sm:px-10 sm:pt-10 "
    >
      <h2 className="self-center text-2xl font-semibold">{title!}</h2>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="name">Nama</label>
        <input
          className="rounded-xl border border-gray-300 px-4 py-2"
          type="text"
          {...register("name")}
        />
        <p className="text-sm text-red-500">{errors.name?.message}</p>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="price">Harga</label>
        <input
          className="rounded-xl border border-gray-300 px-4 py-2"
          type="number"
          {...register("price")}
        />
        <p className="text-sm text-red-500">{errors.price?.message}</p>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="image">Gambar</label>
        <input
          className="rounded-xl border border-gray-300 px-4 py-2"
          onChange={handleImageOnChange}
          type="file"
          accept="image/jpeg, image/png"
          name="images"
          multiple
          required
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="description">Deskripsi</label>
        <textarea
          className="h-48 rounded-xl border border-gray-300 px-4 py-2"
          {...register("description")}
        />
        <p className="text-sm text-red-500">{errors.description?.message}</p>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="stock">Stok</label>
        <input
          className="rounded-xl border border-gray-300 px-4 py-2"
          type="number"
          {...register("stock")}
        />
        <p className="text-sm text-red-500">{errors.stock?.message}</p>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <label htmlFor="category">Kategori</label>
        <select
          className="rounded-xl border border-gray-300 px-4 py-2"
          {...register("category")}
        >
          <option value="">Pilih Kategori</option>
          <option value="Casual">Casual</option>
          <option value="Running">Running</option>
          <option value="Sneakers">Sneakers</option>
          <option value="Sports">Sports</option>
        </select>
        <p className="text-sm text-red-500">{errors.category?.message}</p>
      </div>
      <div className="flex w-full">
        <Button
          variant="primary"
          type="submit"
          className="mx-auto mt-4 w-48 self-center"
        >
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
