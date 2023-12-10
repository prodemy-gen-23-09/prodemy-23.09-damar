import Header from "../Header";
import Footer from "../Footer";
import { LayoutProps } from "../../interfaces/interface";
import Sidebar from "../Sidebar";

const Layout = ({children} : LayoutProps) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
