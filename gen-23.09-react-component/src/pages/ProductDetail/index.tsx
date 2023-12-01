import { productsData } from "../../data/data";

const ProductDetail = () => {
  const productDetail = productsData[0];
  return (
    <main className="min-h-screen flex flex-col md:flex-row justify-center gap-y-5 md:items-start md:gap-x-2 lg:gap-x-6 xl:container md:px-3 mx-auto lg:mx-6 xl:mx-auto mt-0 md:mt-10">
      <img
        src={productDetail.image}
        alt={productDetail.name}
        className="w-full md:w-3/12 md:rounded-lg"
      />
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

      <div className="hidden md:flex flex-col gap-y-5 w-3/12 p-4 border border-gray-300 rounded-lg">
        <h4 className="text-lg font-bold">Atur jumlah dan catatan</h4>
        <div className="flex flex-row gap-x-3 border border-transparent pb-3 border-b-gray-100">
          <img
            src={productDetail.image}
            alt="PC Thumbnail"
            className="w-10 min-w-10 rounded-lg"
          />
          <p>{productDetail.name}</p>
        </div>
        <div className="flex flex-row gap-x-3 justify-start items-center">
          <span>&#45;</span>
          <input
            className="h-fit w-20 px-3 self-center py-0.5 outline-none border rounded-lg text-center"
            value="1"
          />
          <span>&#43;</span>
          <p className="text-sm lg:text-base">
            Stok: <span className="font-bold">{productDetail.stock}</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm lg:text-md text-gray-500">Subtotal</p>
          <p className="text-md lg:text-lg font-bold">
            {"Rp. " + productDetail.price.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <button className="bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg font-bold">
            <span>&#43;</span> Keranjang
          </button>
          <button className="outline outline-1 outline-green-500 text-green-500 p-2 rounded-lg font-bold">
            Beli Langsung
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-x-4 p-3 sticky w-full bottom-0 left-0 z-10 bg-white border border-t-green-500 md:hidden">
        <button className="flex-1 outline outline-1 outline-green-500 text-green-500 p-2 rounded-lg font-bold">
          Beli Langsung
        </button>
        <button className="flex-1 bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg font-bold">
          <span>&#43;</span> Keranjang
        </button>
      </div>
    </main>
  );
};

export default ProductDetail;
