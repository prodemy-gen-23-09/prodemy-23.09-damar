import useSWR from "swr";
import { fetchProduct, fetchProducts } from "../axios/product";

export const getAllProducts = () => {
  const { data, error } = useSWR(
    "http://localhost:8080/products",
    fetchProducts,
  );

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const getProductById = (id: number) => {
  const { data, error } = useSWR(
    `http://localhost:8080/products/${id}`,
    fetchProduct,
  );

  return {
    product: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const searchProductsByQuery = (query: string) => {
  const { data, error } = useSWR(
    `http://localhost:8080/products?q=${query}`,
    fetchProducts,
  );

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
};
