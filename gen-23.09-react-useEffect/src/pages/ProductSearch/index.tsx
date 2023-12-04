import { productsData } from "../../data/data";
import { ProductCard, ProductFilter } from "../../components/Product";

const ProductSearch = () => {
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
      <div className="gird-cols-1 grid h-fit gap-5 sm:grid-cols-2 md:flex-1 lg:grid-cols-3 xl:grid-cols-4">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductSearch;
