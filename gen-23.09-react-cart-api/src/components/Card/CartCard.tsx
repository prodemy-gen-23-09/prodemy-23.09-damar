import { AiOutlineDelete } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button, IconButton } from "../Button";
// import { removeProductFromCart } from "../../store/slices/cartSlice";
import { CartItem } from "../../interfaces/cartInterface";
import { getProductById } from "../../lib/swr/productSWR";
import { deleteProductFromCart } from "../../lib/axios/cartAxios";

const CartCard = ({ productId, quantity, id }: CartItem) => {
  const { product } = getProductById(productId);
  const navigate = useNavigate();

  // const dispatch = useAppDispatch();

  const handleRemoveFromCart = (id: number) => {
    deleteProductFromCart(id);
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-row items-center gap-x-5 rounded-xl border border-gray-200 px-10 py-5">
      <div className="me-5 sm:w-24 md:w-32">
        <img
          src={product?.images[0]}
          alt={product?.name}
          className="h-20 rounded-xl"
        />
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col">
          <h2
            className="line-clamp-1 text-base hover:cursor-pointer"
            onClick={() => navigate(`/products/${product?.id}`)}
          >
            {product?.name}
          </h2>
          <p className="text-xs text-gray-500">{product?.toko.name}</p>
          <p className="mt-1 font-semibold">
            {"Rp. " + product?.price.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <IconContext.Provider value={{ size: "100%", color: "white" }}>
            <IconButton
              className="h-10 w-10 rounded-full bg-primary p-2 hover:bg-accent"
              onClick={openModal}
              icon={<AiOutlineDelete />}
            />
          </IconContext.Provider>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-bold leading-6"
                      >
                        Hapus Barang?
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Barang yang kamu pilih akan dihapus dari keranjang
                        </p>
                      </div>

                      <div className="mt-4 flex flex-row">
                        <Button
                          variant="primary"
                          className="me-2 w-1/2"
                          onClick={() => {
                            handleRemoveFromCart(id);
                            closeModal();
                          }}
                        >
                          Hapus
                        </Button>
                        <Button
                          variant="outline"
                          className="w-1/2"
                          onClick={closeModal}
                        >
                          Batal
                        </Button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <p className="text-center text-sm font-medium">Jumlah : {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
