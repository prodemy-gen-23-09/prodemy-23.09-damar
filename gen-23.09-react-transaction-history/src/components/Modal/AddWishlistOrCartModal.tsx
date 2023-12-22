import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";

interface AddWishlistOrCartModalProps {
  isOpen: boolean;
  closeModal: () => void;
  type: "wishlist" | "cart";
}

const AddWishlistOrCartModal = ({
  isOpen,
  closeModal,
  type,
}: AddWishlistOrCartModalProps) => {
  return (
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
                <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                  Berhasil
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Produk berhasil ditambahkan ke {type}
                  </p>
                </div>

                <div className="mt-4 flex flex-row gap-x-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-5/12 px-10 font-medium"
                    onClick={closeModal}
                  >
                    OK
                  </Button>
                  <Link to={`/${type}`} className="w-7/12">
                    <Button variant="primary" className="w-full font-medium">
                      Lihat {type === "wishlist" ? "wishlist" : "keranjang"}
                    </Button>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddWishlistOrCartModal;
