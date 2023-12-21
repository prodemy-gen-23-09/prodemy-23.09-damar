import { getTransactionsByAdmin } from "../../../lib/swr/transactionSWR";
import { getAllUsers } from "../../../lib/swr/userSWR";

const Dashboard = () => {
  const { transactions } = getTransactionsByAdmin();
  const { users } = getAllUsers();

  const totalTransactions = transactions?.length;

  const totalIncome = transactions?.reduce(
    (total, transaction) => total + transaction.total_price,
    0,
  );
  const totalUsers = users && users?.length - 1;

  return (
    <div className="m-5 flex min-h-screen flex-col gap-y-10 overflow-x-auto lg:container sm:mx-10 lg:mx-auto lg:mb-10">
      <h1>Dashboard</h1>
      <div className="flex w-full flex-row gap-x-8">
        <div className="flex w-1/3 flex-col rounded-xl border border-gray-300 p-5 bg-primary text-white">
          <h2>Total transaksi</h2>
          <p className="text-lg font-bold">{totalTransactions}</p>
        </div>
        <div className="flex w-1/3 flex-col rounded-xl border border-gray-300 p-5 bg-primary text-white">
          <h2>Total pendapatan</h2>
          <p className="text-lg font-bold">{`Rp. ` + totalIncome?.toLocaleString("id-ID")}</p>
        </div>
        <div className="flex w-1/3 flex-col rounded-xl border border-gray-300 p-5 bg-primary text-white">
          <h2>Jumlah pengguna</h2>
          <p className="text-lg font-bold">{totalUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
