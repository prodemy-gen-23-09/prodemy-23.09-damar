import { AiFillPlusCircle } from "react-icons/ai";
import { Button } from "../../../../components/Button";
import { getAllProducts } from "../../../../lib/swr/productSWR";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../../lib/axios/productAxios";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

const ProductList = () => {
  const { products, isLoading, isError } = getAllProducts();

  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const navigate = useNavigate();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleDeleteProduct =
    (id: number) => async (e: MouseEvent<HTMLButtonElement>) => {
      console.log(id);
      e.stopPropagation();

      await deleteProduct(id)
        .then((res) => console.log(res))
        .finally(() => {
          alert("Produk berhasil dihapus");
        });
    };

  useEffect(() => {
    setFilteredProducts(
      products?.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  }, [searchValue, products]);

  const tableHeader = [
    "Nama",
    "Thumbnail",
    "Harga",
    "Stok",
    "Kategori",
    "Aksi",
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-10 overflow-x-auto lg:container sm:mx-10 lg:mx-auto lg:mb-10">
      <div className="w-full rounded-xl border border-gray-200 px-10 py-5">
        <h1 className="px-1 text-xl font-bold">Daftar Produk</h1>

        <div className="container my-5 flex w-full flex-row items-center justify-between gap-x-5 px-1">
          <input
            type="text"
            id="search"
            name="search"
            value={searchValue}
            onChange={handleOnChange}
            className="flex-1 rounded-full border border-gray-300 px-5 py-2 md:w-96 md:flex-initial"
            placeholder="Cari produk"
          />
          <Link to="/admin/add/product">
            <Button
              variant="primary"
              className="flex flex-row items-center gap-x-2 px-5 py-3 text-sm"
            >
              Tambah Produk <AiFillPlusCircle />
            </Button>
          </Link>
        </div>
        <table className="min-w-full table-fixed border-collapse divide-y divide-gray-300 border-gray-300 text-sm lg:table-auto">
          <thead className="mb-5 rounded-xl">
            <tr>
              {tableHeader.map((header) => (
                <th key={header} className="px-3 py-4 text-start text-sm">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts?.map(
              ({ id, name, images, price, stock, category }) => (
                <tr
                  key={id}
                  className="hover:cursor-pointer hover:bg-gray-100"
                  onClick={() => navigate(`/admin/edit/product/${id}`)}
                >
                  <td className="px-3">{name}</td>
                  <td className="px-3">
                    <img src={images[0]} className="w-16" alt="thumbnail" />
                  </td>
                  <td className="px-3">
                    {"Rp. " + price.toLocaleString("id-ID")}
                  </td>
                  <td className="px-3">{stock}</td>
                  <td className="px-3">{category}</td>
                  <td className="px-3">
                    <Button
                      onClick={(e) => handleDeleteProduct(id)(e)}
                      variant="outline"
                      className="w-12 text-sm text-red-500 outline outline-red-500 hover:bg-red-500 hover:text-white md:w-24"
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ProductList;
