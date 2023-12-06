import Banner from "../../components/Banner";
import { productsData as productList } from "../../data/product";
import SectionContainer from "./SectionContainer";

const Home = () => {
  const categories = [
    "Khusus Pelanggan Baru",
    "Waktu Indonesia Belanja",
    "Diskon Spesial",
  ];

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-4 xl:container md:mx-auto md:mt-8 md:px-5">
      <Banner imageUrl="/assets/banner-1.png" />
      {categories.map((category) => (
        <SectionContainer
          key={category}
          category={category}
          productsData={[...productList]
            .filter((product) => product.category?.includes(category))
            .splice(0, 5)}
        />
      ))}
    </main>
  );
};

export default Home;
