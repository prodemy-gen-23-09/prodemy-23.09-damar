import useSWR from "swr";
import { fetchTransactions } from "../axios/transactionAxios";

export const getTransactionsByUser = (userId: number) => {
  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:8080/600/users/${userId}/transactions`,
    fetchTransactions,
  );

  return {
    transactions: data,
    isLoading: isLoading,
    isError: error,
    mutate,
  };
};

export const getTransactionsByAdmin = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:8080/transactions`,
    fetchTransactions,
  );

  return {
    transactions: data,
    isLoading: isLoading,
    isError: error,
    mutate,
  };
};
