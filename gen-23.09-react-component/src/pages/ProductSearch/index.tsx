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
  const handleOnClick = (productId: number) => {
    console.log(productId);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row xl:container gap-y-4 gap-x-8 md:px-5 m-5 md:mx-auto md:mt-8">
      <ProductFilter filters={filtersData} />
      <div className="md:flex-1 h-fit grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleOnClick}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductSearch;
