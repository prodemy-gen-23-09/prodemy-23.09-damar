import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../store";

const UserRoutes = () => {
  const isUser = useSelector(
    (state: RootState) => state.auth.accessToken !== "" && state.auth.user.role === "user",
  );

  if (isUser) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default UserRoutes;
