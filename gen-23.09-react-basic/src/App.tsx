import "./App.css";
import { productList } from "./data/data";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen lg:container grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid gap-5 md:px-5 m-5 md:mx-auto">
        {productList.map((product) => (
          <ProductCard {...product} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
