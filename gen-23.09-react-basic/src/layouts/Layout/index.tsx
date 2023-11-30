import Navbar from "../Navbar";
import Footer from "../Footer";
import { LayoutProps } from "../../types/interface";

const Layout = ({children} : LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col lg:container gap-y-4 md:px-5 m-5 md:mx-auto md:mt-8">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
