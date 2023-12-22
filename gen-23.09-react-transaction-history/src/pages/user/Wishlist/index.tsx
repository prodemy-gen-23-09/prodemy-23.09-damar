import { useEffect, useState } from "react";
import { WishlistCard } from "../../../components/Card";
import { getWishlist } from "../../../lib/swr/wishlistSWR";
import { useAppSelector } from "../../../store/hooks";
import { fetchProduct } from "../../../lib/axios/productAxios";
import { WishlistDetails } from "../../../interfaces/wishlistInterface";

const Wishlist = () => {
  const { user: userData } = useAppSelector((state) => state.auth);
  const {
    wishlist: wishlistData,
    isLoading,
    isError,
    mutate,
  } = getWishlist(userData?.id);

  const [wishlistDetails, setWishlistDetails] = useState<WishlistDetails[]>([]);

  useEffect(() => {
    if (wishlistData && wishlistData.length > 0) {
      Promise.all(
        wishlistData.map(async (item) => {
          return fetchProduct(
            `http://localhost:8080/products/${item.productId}`,
          ).then((res) => {
            return {
              product: res,
              id: item.id,
            };
          });
        }),
      ).then((resolvedWishlistItems) => {
        setWishlistDetails(resolvedWishlistItems);
      });
    } else {
      setWishlistDetails([]);
    }
  }, [wishlistData]);

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-2 overflow-x-auto xl:container sm:mx-10 lg:mx-auto lg:mb-10">
      <div className="flex flex-col gap-y-5 rounded-xl py-3 sm:gap-x-10 lg:px-10">
        <h1 className="px-1 text-2xl font-extrabold">Wishlist</h1>
        <div className="grid h-fit grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlistDetails && wishlistDetails.length > 0 ? (
            wishlistDetails.map((item) => (
              <WishlistCard
                key={item.id}
                product={item.product}
                id={item.id}
              />
            ))
          ) : (
            <p className="h-full self-center px-1">Wishlist kosong</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
