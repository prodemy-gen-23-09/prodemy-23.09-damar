import { Link } from "react-router-dom";
import { Product } from "../../interfaces/interface";
import { ProductCard } from "../../components/Product";

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
        <Link to={`/category?q=${category}`} className="text-primary hover:text-accent rounded-xl px-3 py-1">Lihat semua</Link>
      </div>

      <div className="grid h-fit grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SectionContainer;