import useSWR from "swr";
import { fetchUsers } from "../axios/authAxios";

export const getAllUsers = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:8080/users`,
    fetchUsers,
  );

  return {
    users: data,
    isLoading: isLoading,
    isError: error,
    mutate,
  };
};
