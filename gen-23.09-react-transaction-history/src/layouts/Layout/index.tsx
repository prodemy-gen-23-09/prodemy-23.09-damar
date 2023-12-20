import Header from "../Header";
import Footer from "../Footer";
import { LayoutProps } from "../../interfaces/componentInterface";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import Sidebar from "../Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: LayoutProps) => {
  const isAdmin = useAppSelector(
    (state: RootState) =>
      state.auth.accessToken !== "" && state.auth.user.role === "admin",
  );

  const location = useLocation();

  if (isAdmin) {
    return (
      <div className="flex flex-row gap-x-10 pe-5">
        <div className="w-fit">
          <Sidebar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    );
  }

  if (location.pathname === "/login" || location.pathname === "/register") {
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
