import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";

const AdminRoutes = () => {
  const isAdmin = useAppSelector(
    (state: RootState) =>
      state.auth.accessToken !== "" && state.auth.user.role === "admin",
  );

  if (isAdmin) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default AdminRoutes;
