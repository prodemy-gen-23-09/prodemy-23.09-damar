import { Product } from "./productInterface";

export interface WishlistRequest {
  productId: number;
  userId: number;
}

export interface WishlistResponse {
  id: number;
  productId: number;
  userId: number;
}

export interface WishlistDetails {
  id: number;
  product: Product;
}
