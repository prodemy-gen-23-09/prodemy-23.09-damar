import { ProductCard } from "../../components/Product";
import { productsData } from "../../data/data";

const Home = () => {
  const categories = [
    "Waktu Indonesia Belanja",
    "Produk Terbaru",
    "Rekomendasi untukmu",
  ];

  const handleOnClick = (productId: number) => {
    console.log(productId);
  };

  return (
    <>
      <img
        src="/assets/banner-1.png"
        alt="banner-1"
        className="hidden md:block w-full rounded-lg mb-5"
      />
      {categories.map((category) => (
        <section key={category} className="flex flex-col gap-y-4 mb-6 pt-4 border border-transparent border-t-gray-200">
          <h2 className="text-2xl font-semibold">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleOnClick}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Home;
