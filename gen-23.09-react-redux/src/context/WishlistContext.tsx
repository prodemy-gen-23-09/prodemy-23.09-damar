import { createContext, useState } from "react";
import { Product } from "../interfaces/productInterface";

export const WishlistContext = createContext<WishlistContextProps | undefined>(
  undefined,
);

interface ProviderProps {
  children: React.ReactNode;
}

interface WishlistContextProps {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
}

export const WishlistProvider = ({ children }: ProviderProps) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter((product) => product.id !== id));
  };

  const contextValue = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};
