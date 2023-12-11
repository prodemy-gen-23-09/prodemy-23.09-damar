import { ProductCard, ProductFilter } from "../../../components/Product";
import { useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "../../../interfaces/product";
import { searchProductsByQuery } from "../../../lib/swr/product";

const ProductSearch = () => {
  const [productsSortedBy, setProductsSortedBy] = useState("Terbaru");
  // const [productsData, setProductsData] = useState<Product[]>(productList);
  const [productsDataSorted, setProductsDataSorted] = useState<Product[]>();

  const [queryParams] = useSearchParams();

  const {
    products: productsData,
    isLoading,
    isError,
  } = searchProductsByQuery(queryParams.get("q") || "");

  useEffect(() => {
    if (productsSortedBy === "Harga tertinggi") {
      handleSortByHighestPrice();
    } else if (productsSortedBy === "Harga terendah") {
      handleSortByLowestPrice();
    } else if (productsSortedBy === "Terbaru") {
      handleSortByNewest();
    }
  }, [productsSortedBy, productsData]);

  const handleSortByHighestPrice = () => {
    productsData &&
      setProductsDataSorted(
        [...productsData].sort((a, b) => b.price - a.price),
      );
  };

  const handleSortByLowestPrice = () => {
    productsData &&
      setProductsDataSorted(
        [...productsData].sort((a, b) => a.price - b.price),
      );
  };

  const handleSortByNewest = () => {
    productsData &&
      setProductsDataSorted(
        [...productsData].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      );
  };

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProductsSortedBy(e.target.value);
  };

  const filtersData = [
    {
      category: "Lokasi",
      name: ["Jakarta Barat", "Jakarta Pusat", "Jakarta Selatan"],
    },
    {
      category: "Pengiriman",
      name: ["JNE", "Si Cepat", "Ninja Express"],
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;

  return (
    <main className="m-5 flex min-h-screen flex-col gap-x-8 gap-y-4 xl:container md:mx-auto md:mt-8 md:flex-row md:px-5">
      <ProductFilter filters={filtersData} />
      <div className="flex h-fit w-full flex-col gap-y-5">
        <div className="flex flex-col items-start gap-y-2 md:flex-row md:items-center justify-between">
          <p>
            Menampilkan {productsDataSorted?.length} barang untuk pencarian{" "}
            {`"${queryParams.get("q")}"`}
          </p>
          <form className="flex flex-row items-center gap-x-2 text-base md:text-sm">
            <label htmlFor={`urutkan`}>Urutkan : </label>
            <select
              className="w-48 rounded-lg border border-gray-200 px-4"
              name={`urutkan`}
              onChange={(e) => handleOnChange(e)}
            >
              <option value="Terbaru">Terbaru</option>
              <option value="Harga tertinggi">Harga tertinggi</option>
              <option value="Harga terendah">Harga terendah</option>
            </select>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:flex-1 lg:grid-cols-3 xl:grid-cols-4">
          {productsDataSorted && productsDataSorted.length > 0 ? (
            productsDataSorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div>Produk tidak ditemukan</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductSearch;
