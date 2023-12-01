interface ProductFilterProps {
  filters: {
    category: string;
    name: string[];
  }[];
}

const ProductFilter = ({ filters }: ProductFilterProps) => {
  return (
    <div className="md:w-40 lg:w-1/6 h-fit">
      <button className="flex flex-row md:hidden w-fit border border-gray-300 rounded-lg gap-y-3 py-2 px-5 bg-transparent items-center">
        <img src="../assets/filter.png" alt="filter" className="h-5" />
        <p>Filter</p>
      </button>
      <div className=" hidden md:block p-4 h-fit border border-gray-300 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Kategori</h3>
        {filters?.map((filter) => (
          <div className="flex flex-col gap-y-1 mb-3">
            <h4 className="text-base font-semibold">{filter.category}</h4>
            <ul className="flex flex-col gap-y-2">
              {filter.name.map((filterName) => (
                <li key={filterName} className="text-sm flex gap-x-2 items-center">
                  <input type="checkbox" id={filterName} name={filterName} className="hover:cursor-pointer"/>
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
