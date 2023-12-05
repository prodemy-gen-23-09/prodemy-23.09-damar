import Banner from "../../components/Banner";
import { ProductCard } from "../../components/Product";
import { productsData as productList } from "../../data/product";
import { ChangeEvent, useEffect, useState } from "react";

const Home = () => {
  const [productsSortedBy, setProductSortedBy] = useState("Terbaru");
  const [productsData, setProductsData] = useState(productList);

  useEffect(() => {
    if (productsSortedBy === "Harga tertinggi") {
      handleSortByHighestPrice();
    } else if (productsSortedBy === "Harga terendah") {
      handleSortByLowestPrice();
    } else if (productsSortedBy === "Terbaru") {
      handleSortByNewest();
    }
  }, [productsSortedBy, productList]);

  const handleSortByHighestPrice = async () => {
    setProductsData([...productList].sort((a, b) => b.price - a.price));
  };

  const handleSortByLowestPrice = async () => {
    setProductsData([...productList].sort((a, b) => a.price - b.price));
  };

  const handleSortByNewest = async () => {
    setProductsData(
      [...productList].sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
      ),
    );
  };

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProductSortedBy(e.target.value);
  };

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-4 xl:container md:mx-auto md:mt-8 md:px-5">
      <Banner imageUrl="/assets/banner-1.png" />
      <section className="mb-6 flex flex-col gap-y-4 border border-transparent border-t-gray-200 pt-4">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold">Waktu Indonesia Belanja</h2>
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
              <option className="border border-gray-300" value="Harga tertinggi">Harga tertinggi</option>
              <option value="Harga terendah">Harga terendah</option>
            </select>
          </form>
        </div>

        <div className="grid h-fit grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
