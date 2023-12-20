import { getAllProducts } from "../../../lib/swr/productSWR";
import Banner from "../../../components/Banner";
import SectionContainer from "./SectionContainer";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const { products: productsData, isLoading, isError } = getAllProducts();

  const categories = ["Sneakers", "Running", "Sports"];

  if (isError) return <div>Something went wrong...</div>;
  if (isLoading)
    return (
      <div className="mx-auto flex w-fit flex-row items-center">
        <BeatLoader color="#4959b6" />
      </div>
    );

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-4 xl:container md:mx-auto md:mt-8 md:px-5">
      <Banner imageUrl="/assets/banner-1.png" />

      {productsData &&
        categories.map((category) => (
          <SectionContainer
            key={category}
            category={category}
            productsData={[...productsData]
              .filter((product) => product.category === category)
              .splice(0, 5)}
          />
        ))}
    </main>
  );
};

export default Home;
