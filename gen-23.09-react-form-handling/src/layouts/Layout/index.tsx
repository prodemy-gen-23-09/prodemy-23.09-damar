import Header from "../Header";
import Footer from "../Footer";
import { LayoutProps } from "../../interfaces/interface";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
