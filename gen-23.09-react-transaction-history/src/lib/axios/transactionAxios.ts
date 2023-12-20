import axios from "axios";
import { Product } from "../../interfaces/productInterface";
import { Promos } from "../../interfaces/cartInterface";

interface OrderItem {
  product: Product;
  quantity: number;
  sub_total: number;
}

export interface Transactions {
  userId: number;
  user_details: {
    name: string;
    email: string;
    phone: string | null;
    address: string | null;
  };

  order_items: OrderItem[];
  order_date: string;

  payment_method: string;
  delivery_method: {
    name: string;
    price: number;
  };

  promo_used?: Promos;
  total_price: number;
}

export const createTransaction = async (body: Transactions) => {
  const data = await axios
    .post(`http://localhost:8080/transactions`, body)
    .then((res) => res.data);

  return data;
};
