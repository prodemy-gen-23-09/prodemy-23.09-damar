import { Link } from "react-router-dom";
import { AiOutlineEllipsis } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, MouseEvent } from "react";
import { WishlistDetails } from "../../interfaces/wishlistInterface";
import { deleteWishlist } from "../../lib/axios/wishlistAxios";

const WishlistCard = ({ product, id: wishlistItemId }: WishlistDetails) => {
  const { id, name, price, images, toko } = product;

  const handleDeleteWishlist = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    await deleteWishlist(wishlistItemId).then(() => {
      alert("Produk berhasil dihapus dari wishlist");
    }).finally(() => {
        window.location.reload();
    });
  };

  return (
    <Link
      className="product-card flex h-fit cursor-pointer flex-col gap-1 rounded-lg border border-gray-300 p-4 pb-6 hover:shadow-md"
      key={id}
      to={"/products/" + id}
    >
      <Menu as="div" className="relative inline-block self-end text-left">
        <Menu.Button className="h-6 text-sm text-gray-500">
          <IconContext.Provider value={{ size: "100%" }}>
            <AiOutlineEllipsis />
          </IconContext.Provider>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  className={`w-fit rounded-md px-2 py-2 text-xs`}
                  onClick={(e) => handleDeleteWishlist(e)}
                >
                  Hapus
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <img className="h-40 w-40 self-center" src={images[0]} alt={name} />
      <h3 className="line-clamp-1 text-sm font-semibold md:text-base">
        {name}
      </h3>
      <p className="text-sm text-gray-400 ">{toko.name}</p>
      <p className="text-md mt-2 font-bold md:text-lg">
        {"Rp. " + price.toLocaleString("id-ID")}
      </p>
    </Link>
  );
};

export default WishlistCard;
