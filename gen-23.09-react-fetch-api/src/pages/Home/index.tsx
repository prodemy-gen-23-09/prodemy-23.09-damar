import { getAllProducts } from "../../lib/swr/product";
import Banner from "../../components/Banner";
import SectionContainer from "./SectionContainer";

const Home = () => {
  const { products: productsData, isLoading, isError } = getAllProducts();

  if (isError) return <div>Something went wrong...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-4 xl:container md:mx-auto md:mt-8 md:px-5">
      <Banner imageUrl="/assets/banner-1.png" />

      {productsData && (
        <SectionContainer
          category="Diskon Spesial"
          productsData={productsData}
        />
      )}
    </main>
  );
};

export default Home;
