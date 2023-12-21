import axios from "axios";
import {
  AddProductRequest,
  Product as ProductResponse,
  UpdateProductRequest,
} from "../../interfaces/productInterface";

export const fetchProducts = async (url: string): Promise<ProductResponse[]> => {
  const data = await axios.get(url).then((res) => res.data);

  return data;
};

export const fetchProduct = async (url: string): Promise<ProductResponse> => {
  const data = await axios.get(url).then((res) => res.data);
  return data;
};

export const addProduct = async (
  body: AddProductRequest,
): Promise<ProductResponse> => {
  const data = await axios
    .post(`http://localhost:8080/products`, body)
    .then((res) => res.data);

  return data;
};

export const updateProduct = async (
  id: number,
  body: UpdateProductRequest,
): Promise<ProductResponse> => {
  const data = await axios
    .patch(`http://localhost:8080/products/${id}`, body)
    .then((res) => res.data);

  return data;
};

export const deleteProduct = async (id: number): Promise<ProductResponse> => {
  const data = await axios
    .delete(`http://localhost:8080/products/${id}`)
    .then((res) => res.data);

  return data;
};
