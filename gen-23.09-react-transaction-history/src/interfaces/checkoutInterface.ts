import { Promos } from "./cartInterface";
import { Product } from "./productInterface";

export interface OrderItem {
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

export interface TransactionResponse extends Transactions {
  id: number;
  status: string;
}
