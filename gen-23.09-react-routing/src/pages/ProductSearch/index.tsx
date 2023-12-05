import { productsData as productList } from "../../data/product";
import { ProductCard, ProductFilter } from "../../components/Product";
import { useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "../../interfaces/interface";

const ProductSearch = () => {
  const [productsSortedBy, setProductSortedBy] = useState("Terbaru");
  const [productsData, setProductsData] = useState<Product[]>(productList);
  const [productsSorted, setProductsSorted] = useState<Product[]>();

  const [queryParams] = useSearchParams();

  useEffect(() => {
    if (productsSortedBy === "Harga tertinggi") {
      handleSortByHighestPrice();
    } else if (productsSortedBy === "Harga terendah") {
      handleSortByLowestPrice();
    } else if (productsSortedBy === "Terbaru") {
      handleSortByNewest();
    }
  }, [productsSortedBy, productsData]);

  useEffect(() => {
    if (queryParams.get("q")) {
      setProductsData(
        [...productList].filter((product) =>
          product.name.toLowerCase().includes(queryParams.get("q")!),
        ),
      );
    }
  }, [queryParams]);

  const handleSortByHighestPrice = async () => {
    setProductsSorted([...productsData].sort((a, b) => b.price - a.price));
  };

  const handleSortByLowestPrice = async () => {
    setProductsSorted([...productsData].sort((a, b) => a.price - b.price));
  };

  const handleSortByNewest = async () => {
    setProductsSorted(
      [...productsData].sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
      ),
    );
  };

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProductSortedBy(e.target.value);
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

  return (
    <main className="m-5 flex min-h-screen flex-col gap-x-8 gap-y-4 xl:container md:mx-auto md:mt-8 md:flex-row md:px-5">
      <ProductFilter filters={filtersData} />
      <div className="flex h-fit w-full flex-col gap-y-5">
        <div className="flex flex-row items-center justify-between">
          <p>
            Menampilkan {productList.length} barang untuk pencarian{" "}
            {`"${queryParams.get("q")}"`}
          </p>
          <form className="flex flex-row items-center gap-x-2 text-sm">
            <label htmlFor={`urutkan`}>Urutkan : </label>
            <select
              className="rounded-lg border-r-8 border-transparent px-3 py-2 ring-1 ring-gray-200"
              name={`urutkan`}
              onChange={(e) => handleOnChange(e)}
            >
              <option className="my-2" value="Terbaru">
                Terbaru
              </option>
              <option
                className="border border-gray-300"
                value="Harga tertinggi"
              >
                Harga tertinggi
              </option>
              <option value="Harga terendah">Harga terendah</option>
            </select>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:flex-1 lg:grid-cols-3 xl:grid-cols-4">
          {productsSorted && productsSorted.length > 0 ? (
            productsSorted.map((product) => (
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
