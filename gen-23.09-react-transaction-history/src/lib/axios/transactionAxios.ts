import axios from "axios";
import { TransactionResponse, Transactions } from "../../interfaces/checkoutInterface";



export const createTransaction = async (body: Transactions): Promise<TransactionResponse> => {
  const data = await axios
    .post(`http://localhost:8080/transactions`, body)
    .then((res) => res.data);

  return data;
};

export const get = async () => {
  const data = await axios
    .get(`http://localhost:8080/transactions`)
    .then((res) => res.data);

  return data;
};

export const fetchTransactions = async (url: string): Promise<TransactionResponse[]>  => {
  const data = await axios.get(url).then((res) => res.data);

  return data;
};
