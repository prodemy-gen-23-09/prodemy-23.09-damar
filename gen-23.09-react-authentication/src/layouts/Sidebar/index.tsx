import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { resetAuth } from "../../store/slices/authSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(resetAuth());
  };

  return (
    <aside className="sticky left-0 top-0 flex min-h-screen flex-col flex-wrap gap-y-2 border border-transparent border-r-gray-200 bg-primary py-5 font-semibold text-white">
      <Link
        to="/admin"
        className="flex h-8 flex-row items-center gap-x-2 rounded-lg pe-10 ps-2 hover:bg-accent"
      >
        <AiOutlineHome />
        <span>Dashboard</span>
      </Link>
      <div
        onClick={handleLogout}
        className="flex h-8 flex-row items-center gap-x-2 rounded-lg pe-10 ps-2 hover:bg-accent hover:cursor-pointer"
      >
        <AiOutlineLogout />
        <span>Logout</span>
      </div>
    </aside>
  );
};

export default Sidebar;
