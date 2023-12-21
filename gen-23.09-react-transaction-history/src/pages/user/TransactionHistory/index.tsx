import { ChangeEvent, useEffect, useState } from "react";
import { TransactionCard } from "../../../components/Card";
import { getTransactionsByUser } from "../../../lib/swr/transactionSWR";
import { useAppSelector } from "../../../store/hooks";
import { TransactionResponse } from "../../../interfaces/checkoutInterface";

const TransactionHistory = () => {
  const { user: userData } = useAppSelector((state) => state.auth);
  const { transactions, isLoading, isError } = getTransactionsByUser(
    userData?.id,
  );

  const [transactionsSortedBy, setTransactionsSortedBy] = useState("Terbaru");
  const [transactionsDataSorted, setTransactionsDataSorted] =
    useState<TransactionResponse[]>();

  useEffect(() => {
    if (transactionsSortedBy === "Harga tertinggi") {
      handleSortByHighestPrice();
    } else if (transactionsSortedBy === "Harga terendah") {
      handleSortByLowestPrice();
    } else if (transactionsSortedBy === "Terbaru") {
      handleSortByNewest();
    }
  }, [transactionsSortedBy, transactions]);

  const handleSortByHighestPrice = () => {
    transactions &&
      setTransactionsDataSorted(
        [...transactions].sort((a, b) => b.total_price - a.total_price),
      );
  };

  const handleSortByLowestPrice = () => {
    transactions &&
      setTransactionsDataSorted(
        [...transactions].sort((a, b) => a.total_price - b.total_price),
      );
  };

  const handleSortByNewest = () => {
    transactions &&
      setTransactionsDataSorted(
        [...transactions].sort(
          (a, b) =>
            new Date(b.order_date).getTime() - new Date(a.order_date).getTime(),
        ),
      );
  };

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTransactionsSortedBy(e.target.value);
  };

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-2 overflow-x-auto xl:container sm:mx-10 lg:mx-auto lg:mb-10">
      <div className="flex flex-col gap-y-5 rounded-xl py-3 sm:gap-x-10 lg:px-10">
        <h1 className="px-1 text-2xl font-extrabold">Daftar Transaksi</h1>
        <div className="flex flex-row justify-between">
          <input
            type="text"
            className="rounded-full border border-gray-300  py-1 px-4 w-1/4"
            placeholder="Cari transaksimu disini"
          />
          <form className="flex flex-row items-center gap-x-2 self-end text-base md:text-sm">
            <label htmlFor={`urutkan`}>Urutkan : </label>
            <select
              className="w-48 rounded-lg border border-gray-200 px-4"
              name={`urutkan`}
              onChange={(e) => handleOnChange(e)}
            >
              <option value="Terbaru">Terbaru</option>
              <option value="Harga tertinggi">Harga tertinggi</option>
              <option value="Harga terendah">Harga terendah</option>
            </select>
          </form>
        </div>
        <div className="flex flex-col gap-y-5">
          {transactionsDataSorted?.map((transaction) => (
            <TransactionCard {...transaction} key={transaction.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default TransactionHistory;
