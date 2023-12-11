import { ProductDetailProps } from "../../../interfaces/productInterface";

const ProductDetailDescription = ({ productDetail }: ProductDetailProps) => {
  return (
    <div className="flex w-full flex-col px-3 md:w-6/12">
      <div className="mb-5 border border-transparent border-b-gray-200">
        <h3 className="mb-2 text-xl font-semibold md:font-bold lg:text-2xl">
          {productDetail.name}
        </h3>
        <div className="flex flex-row items-center gap-x-2">
          <p className="line-clamp-1 text-base">
            Terjual <span className="text-gray-500">5rb+</span>
          </p>
          <span>&#8226;</span>
          <p className="text-base">
            <span>&#9733;</span> 4.9
            <span className="text-gray-500">(3.011 rating)</span>
          </p>
          <span>&#8226;</span>
          <p className="text-base md:hidden lg:block">
            Diskusi <span className="text-gray-500">106</span>
          </p>
        </div>
        <p className="my-5 text-2xl font-bold md:text-3xl">
          {"Rp. " + productDetail.price.toLocaleString("id-ID")}
        </p>
      </div>
      <h4 className="mb-2 text-lg font-bold">Deskripsi Produk</h4>
      {productDetail.description}
      <div className="my-5 flex w-full flex-row items-center gap-x-3 border border-transparent border-y-gray-100 py-4">
        <img
          src="/assets/tokopedia-little-logo.png"
          alt="tokopedia"
          className="h-12"
        />
        <div className="ms-5 flex grow flex-col">
          <h4 className="line-clamp-1 text-lg font-bold">
            {productDetail.toko.name}
          </h4>
          <p className="mt-0 text-gray-500">{productDetail.toko.location}</p>
        </div>
        <button className="h-fit rounded-lg px-6 py-1 font-bold text-primary outline outline-1 outline-secondary hover:bg-accent hover:text-white">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
