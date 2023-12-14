import Header from "../Header";
import Footer from "../Footer";
import { LayoutProps } from "../../interfaces/componentInterface";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import Sidebar from "../Sidebar";

const Layout = ({ children }: LayoutProps) => {
  const isAdmin = useAppSelector(
    (state: RootState) =>
      state.auth.accessToken !== "" && state.auth.user.role === "admin",
  );

  if (isAdmin) {
    return (
      <div className="flex flex-row gap-x-10 pe-5">
        <div className="w-fit xl:w-1/12">
          <Sidebar />
        </div>
        <div className="flex-1">{children}</div>
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
