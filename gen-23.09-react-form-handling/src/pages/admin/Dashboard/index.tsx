import { AiFillPlusCircle } from "react-icons/ai";
import { Button } from "../../../components/Button";
import { getAllProducts } from "../../../lib/swr/product";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../lib/axios/product";

const Dashboard = () => {
  const { products, isLoading, isError } = getAllProducts();

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id)
      .then((res) => console.log(res))
      .finally(() => alert("Produk berhasil dihapus"));
  };

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
    <main className="mx-5 my-10 flex flex-col gap-y-5  overflow-x-auto lg:container sm:mx-10 lg:mx-auto">
      <div className="container flex w-full flex-row justify-between px-1">
        <h1 className="text-3xl font-bold">Daftar Produk</h1>
        <Link to="/admin/add-product">
          <Button
            variant="primary"
            className="flex flex-row items-center gap-x-2 px-5 py-2"
          >
            Tambah Produk <AiFillPlusCircle />
          </Button>
        </Link>
      </div>
      <div className="w-full rounded-xl  border border-gray-200 px-10 py-5 ">
        <table className="min-w-full border-collapse divide-y divide-gray-300 border-gray-300 text-sm">
          <thead className="mb-5 rounded-xl">
            <tr className="">
              {tableHeader.map((header) => (
                <th key={header} className="py-4 text-sm">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products?.map(({ id, name, images, price, stock, category }) => (
              <tr key={id} className="hover:bg-gray-200 ">
                <td className="whitespace-nowrap">{name}</td>
                <td className="px-4 py-2">
                  <img src={images[0]} className="w-16" alt="thumbnail" />
                </td>
                <td className="px-4 py-2">{price}</td>
                <td className="px-4 py-2">{stock}</td>
                <td className="px-4 py-2">{category}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:gap-x-3">
                    <Link to={`/admin/edit/${id}`}>
                      {" "}
                      <Button variant="primary" className="w-24">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleDeleteProduct(id)}
                      variant="outline"
                      className="w-24"
                    >
                      Hapus
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Dashboard;
