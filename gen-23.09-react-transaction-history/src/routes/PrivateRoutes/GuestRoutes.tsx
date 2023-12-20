import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";

const GuestRoutes = () => {
  const isGuest = useAppSelector((state: RootState) => state.auth.accessToken === "");

  if (isGuest) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default GuestRoutes;
