import { TransactionCard } from "../../../components/Card";
import { getTransactionsByUser } from "../../../lib/swr/transactionSWR";
import { useAppSelector } from "../../../store/hooks";

const TransactionHistory = () => {
  const { user: userData } = useAppSelector((state) => state.auth);
  const { transactions, isLoading, isError } = getTransactionsByUser(
    userData?.id,
  );

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="m-5 flex min-h-screen flex-col gap-y-2 overflow-x-auto xl:container sm:mx-10 lg:mx-auto lg:mb-10">
      <div className="flex flex-col gap-y-5 rounded-xl py-3 sm:gap-x-10 lg:px-10">
        <h1 className="px-1 text-2xl font-extrabold">Daftar Transaksi</h1>
        <div className="flex flex-col gap-y-5">
          {transactions?.map((transaction) => (
            <TransactionCard {...transaction} key={transaction.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default TransactionHistory;
