import { ChangeEvent, useEffect, useState } from "react";
import { getTransactionsByAdmin } from "../../../../lib/swr/transactionSWR";
import TransactionTRow from "./TransactionTRow";

const TransactionList = () => {
  const { transactions, isError, isLoading } = getTransactionsByAdmin();

  const [searchValue, setSearchValue] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setFilteredTransactions(
      transactions?.filter((transaction) =>
        transaction.user_details.name
          .toLowerCase()
          .includes(searchValue.toLowerCase()),
      ),
    );
  }, [searchValue, transactions]);

  const tableHeader = [
    "Invoice no",
    "Tanggal",
    "ID pembeli",
    "Metode pembayaran",
    "Metode pengiriman",
    "Total pembelian",
    "Aksi",
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-10 overflow-x-auto lg:container sm:mx-10 lg:mx-auto lg:mb-10">
      <div className="w-full rounded-xl border border-gray-200 px-10 py-5">
        <h1 className="px-1 text-xl font-bold">Daftar Transaksi</h1>

        <div className="container my-5 flex w-full flex-row items-center justify-between gap-x-5 px-1">
          <input
            type="text"
            id="search"
            name="search"
            value={searchValue}
            onChange={handleOnChange}
            className="flex-1 rounded-full border border-gray-300 px-5 py-2 md:w-96 md:flex-initial"
            placeholder="Cari transaksi"
          />
        </div>
        <table className="min-w-full table-fixed border-collapse divide-y divide-gray-300 border-gray-300 text-sm lg:table-auto">
          <thead className="mb-5 rounded-xl">
            <tr>
              {tableHeader.map((header) => (
                <th key={header} className="px-3 py-4 text-start text-sm">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTransactions?.map((transaction) => (
              <TransactionTRow {...transaction} key={transaction.id} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default TransactionList;
