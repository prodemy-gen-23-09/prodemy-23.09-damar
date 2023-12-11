import { Link } from "react-router-dom";
import { Product } from "../../../interfaces/productInterface";
import { ProductCard } from "../../../components/Card";

interface SectionContainerProps {
  category: string;
  productsData: Product[];
}

const SectionContainer = ({
  category,
  productsData,
}: SectionContainerProps) => {
  return (
    <section className="mb-6 flex flex-col gap-y-4 border border-transparent border-t-gray-100 pt-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold">{category}</h2>
        {productsData.length >= 5 && (
          <Link
            to={`/search?q=${category}`}
            className="rounded-xl px-3 py-1 text-primary hover:text-accent"
          >
            Lihat semua
          </Link>
        )}
      </div>

      <div className="grid-cols-1 grid h-fit gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SectionContainer;
