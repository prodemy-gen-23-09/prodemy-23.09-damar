import axios from "axios";
import { CartItem } from "../../interfaces/cartInterface";

export interface AddProductToCartRequest {
  userId: number;
  productId: number;
  quantity: number;
}

export interface UpdateProductQuantityInCartRequest {
  cartItemId: number;
  quantity: number;
}

export const getProductInCart = async (url: string): Promise<CartItem[]> => {
  const data = await axios.get(url).then((res) => res.data);

  return data;
};

export const addProductToCart = async ({
  userId,
  productId,
  quantity,
}: AddProductToCartRequest) => {
  const data = await axios
    .post(`http://localhost:8080/cart_items`, {
      userId,
      productId,
      quantity,
    })
    .then((res) => res.data)

  return data;
};

export const updateProductQuantityInCart = async ({
  cartItemId,
  quantity,
}: UpdateProductQuantityInCartRequest) => {
  const data = await axios
    .patch(`http://localhost:8080/cart_items/${cartItemId}`, {
      quantity: quantity,
    })
    .then((res) => res.data)

  return data;
};

export const deleteProductFromCart = async (cartItemId: number) => {
  const data = await axios
    .delete(`http://localhost:8080/cart_items/${cartItemId}`)
    .then((res) => res.data)

  return data;
};
