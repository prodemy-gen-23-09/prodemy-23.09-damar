import { ProductDetailProps } from "../../types/interface";

const ProductDetailDescription = ({ productDetail }: ProductDetailProps) => {
  return (
    <div className="flex flex-col w-full px-3 md:w-6/12">
      <div className="border border-transparent border-b-gray-200 mb-5">
        <h3 className="text-xl mb-2 font-semibold md:font-bold">
          {productDetail.name}
        </h3>
        <div className="flex flex-row items-center gap-x-2">
          <p className="text-base line-clamp-1">
            Terjual <span className="text-gray-500">5rb+</span>
          </p>
          <span>&#8226;</span>
          <p className="text-base">
            <span>&#9733;</span> 4.9
            <span className="text-gray-500">(3.011 rating)</span>
          </p>
          <span>&#8226;</span>
          <p className="md:hidden lg:block text-base">
            Diskusi <span className="text-gray-500">106</span>
          </p>
        </div>
        <p className="text-2xl md:text-3xl font-bold my-5">
          {"Rp. " + productDetail.price.toLocaleString("id-ID")}
        </p>
      </div>
      <h4 className="text-lg font-bold mb-2">Deskripsi Produk</h4>
      {productDetail.description}
      <div className="flex flex-row w-full gap-x-3 items-center border border-transparent py-4 border-y-gray-100 my-5">
        <img
          src="/assets/tokopedia-little-logo.png"
          alt="tokopedia"
          className="h-12"
        />
        <div className="flex flex-col grow ms-5">
          <h4 className="text-lg font-bold line-clamp-1">
            {productDetail.toko.name}
          </h4>
          <p className="text-gray-500 mt-0">{productDetail.toko.location}</p>
        </div>
        <button className="outline outline-1 outline-green-500 rounded-lg px-6 py-1 h-fit font-bold text-green-500">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
