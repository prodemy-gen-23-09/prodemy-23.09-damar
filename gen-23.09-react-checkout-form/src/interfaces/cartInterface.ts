// import { Product } from "./productInterface";

import { Product } from "./productInterface";

export interface CartItem {
  userId: number,
  id: number,
  productId: number;
  quantity: number;
}

export interface CartDetails {
  cartId: number;
  product: Product;
  quantity: number;
}
