import useSWR from "swr";
import { fetchProduct, fetchProducts } from "../axios/productAxios";

export const getAllProducts = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/products",
    fetchProducts,
  );

  return {
    products: data,
    isLoading: isLoading,
    isError: error,
  };
};

export const getProductById = (id: number) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:8080/products/${id}`,
    fetchProduct,
  );

  return {
    product: data,
    isLoading: isLoading,
    isError: error,
  };
};

export const searchProductsByQuery = (query: string) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:8080/products?q=${query}`,
    fetchProducts,
  );

  return {
    products: data,
    isLoading: isLoading,
    isError: error,
  };
};
