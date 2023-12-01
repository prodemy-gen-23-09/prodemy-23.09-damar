import Navbar from "../Navbar";
import Footer from "../Footer";
import { LayoutProps } from "../../types/interface";

const Layout = ({children} : LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
