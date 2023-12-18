import { Product } from "./productInterface";

export interface CartItem {
  userId: number;
  id: number;
  productId: number;
  quantity: number;
}

export interface CartDetails {
  cartId: number;
  product: Product;
  quantity: number;
}

export interface Promos {
  name: string;
  category: "discount" | "cashback" | "free-ongkir";
  percentage?: number;
  value?: number;
  maxDiscount?: number;
}

export interface CheckoutItem {
  product: Product;
  quantity: number;
}

export interface CartPayload {
  userId: number;
  user: {
    name: string;
    email: string;
  };
  promo: Promos | null;
  checkout_items: CheckoutItem[] | null;
  total_price: number;
}

export interface CheckoutState extends CartPayload {
  user: {
    name: string;
    email: string;
    address?: string;
  };
}

export interface DeliveryMethod {
  name: string;
  value: string;
  estimation: string;
  price: number;
}
