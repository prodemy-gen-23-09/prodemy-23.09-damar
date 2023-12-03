import { IconButton } from "../../components/Button";
import { IconContext } from "react-icons";
import {
  AiOutlineArrowLeft,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="flex flex-row sticky top-0 left-0 z-10 w-full bg-white justify-between md:justify-start items-center border border-x-transparent border-t-transparent py-4 md:py-6 px-3 md:px-4 lg:px-10 xl:px-12 gap-x-5 md:gap-x-8">
      <IconContext.Provider value={{ size: "100%" }}>
        <IconButton
          icon={<AiOutlineArrowLeft />}
          title="back-arrow"
          className="h-8 md:hidden"
        />
      </IconContext.Provider>
      <img
        src="/assets/Tokopedia-logo.svg"
        className="hidden md:block md:h-10 hover:cursor-pointer"
        alt="logo"
      />
      <input
        name="search"
        className="hidden md:block flex-1 h-fit px-5 py-2 outline outline-1 outline-gray-300 rounded-lg"
        placeholder="Cari di tokokami"
      />
      <IconContext.Provider value={{ size: "100%" }}>
        <nav className="flex flex-row items-center gap-x-5 md:gap-x-8">
          <IconButton
            icon={<AiOutlineHeart />}
            title="wishlist"
            className="hidden md:block md:h-10"
          />
          <IconButton
            icon={<AiOutlineSearch />}
            title="search"
            className="h-8 md:hidden"
          />
          <IconButton
            icon={<AiOutlineShoppingCart />}
            title="cart"
            className="h-8 md:h-10"
          />
          <IconButton
            icon={<AiOutlineUser />}
            title="profile"
            className="hidden md:block md:h-10"
          />
          <IconButton
            icon={<AiOutlineMenu />}
            title="menu"
            className="h-8 md:hidden"
          />
        </nav>
      </IconContext.Provider>
    </header>
  );
};

export default Navbar;
