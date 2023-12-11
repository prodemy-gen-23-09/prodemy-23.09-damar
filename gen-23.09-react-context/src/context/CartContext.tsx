import { createContext, useContext, useState } from "react";
import { Product } from "../interfaces/productInterface";

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartContextProps {
  cart: CartItemProps[];
  addToCart: (product: CartItemProps) => void;
  removeFromCart: (id: number) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartItemProps {
  product: Product;
  quantity: number;
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItemProps[]>([]);

  const addToCart = (cartItem: CartItemProps) => {
    const cartWithoutTheItem = cart.filter(
      (item) => item.product.id !== cartItem.product.id,
    );

    const existingItem = cart.find(
      (item) => item.product.id === cartItem.product.id,
    );

    if (existingItem) {
      if (
        existingItem.quantity + cartItem.quantity >
        existingItem.product.stock
      ) {
        alert("Stok tidak mencukupi");
        return;
      }

      setCart([
        ...cartWithoutTheItem,
        {
          ...existingItem,
          quantity: existingItem.quantity + cartItem.quantity,
        },
      ]);

      return;
    }

    setCart([...cart, cartItem]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.product.id !== id));
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
