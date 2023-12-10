import axios from "axios";
import { Product as ProductResponse } from "../../interfaces/interface";

type ProductsResponse = ProductResponse[];

export const fetchProducts = async (url: string): Promise<ProductsResponse> => {
  const data = await axios.get(url).then((res) => res.data);

  return data;
};

export const fetchProduct = async (url: string): Promise<ProductResponse> => {
  const data = await axios.get(url).then((res) => res.data);

  return data;
};
