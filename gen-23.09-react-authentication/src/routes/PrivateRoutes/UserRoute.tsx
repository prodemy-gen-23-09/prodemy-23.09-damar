import { Navigate, Route } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute = ({
  path,
  element,
  isAuthenticated,
}: PrivateRouteProps) => {
  if (isAuthenticated) return <Route path={path} element={element} />;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
