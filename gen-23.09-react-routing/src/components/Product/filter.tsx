import { ProductFilterProps } from "../../interfaces/interface";

const ProductFilter = ({ filters }: ProductFilterProps) => {
  return (
    <div className="h-fit md:w-40 lg:w-1/6">
      <button className="flex w-fit flex-row items-center gap-y-3 rounded-lg border border-gray-300 bg-transparent px-5 py-2 md:hidden">
        <img src="../assets/filter.png" alt="filter" className="h-5" />
        <p>Filter</p>
      </button>
      <div className=" hidden h-fit rounded-lg border border-gray-300 p-4 md:block">
        <h3 className="mb-3 text-lg font-bold">Kategori</h3>
        {filters?.map((filter) => (
          <div className="mb-3 flex flex-col gap-y-1">
            <h4 className="text-base font-semibold">{filter.category}</h4>
            <ul className="flex flex-col gap-y-2">
              {filter.name.map((filterName) => (
                <li
                  key={filterName}
                  className="flex items-center gap-x-2 text-sm"
                >
                  <input
                    type="checkbox"
                    id={filterName}
                    name={filterName}
                    className="hover:cursor-pointer"
                  />
                  <label htmlFor={filterName}>{filterName}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
