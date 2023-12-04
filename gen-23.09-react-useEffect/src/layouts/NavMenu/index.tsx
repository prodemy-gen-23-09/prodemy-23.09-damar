import { IconContext } from "react-icons";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import { IconButton } from "../../components/Button";

interface NavMenuProps {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleRegister?: () => void;
}

const NavMenu = ({ isLoggedIn, handleLogin }: NavMenuProps) => {
  if (isLoggedIn)
    return (
      <IconContext.Provider value={{ size: "100%" }}>
        <nav className="flex flex-row items-center gap-x-5">
          <>
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
          </>
        </nav>
      </IconContext.Provider>
    );
  else
    return (
      <>
        {" "}
        <button
          className="self-center md:hover:cursor-pointer outline outline-1 outline-green-500 rounded-lg px-6 py-1 h-fit font-bold text-green-500 hover:bg-green-500 hover:text-white"
          onClick={handleLogin}
        >
          Masuk
        </button>
        <button className="self-center md:hover:cursor-pointer hover:outline hover:outline-1 hover:outline-green-500 rounded-lg px-6 py-1 h-fit font-bold hover:bg-white hover:text-green-500 bg-green-500 text-white">
          Daftar
        </button>
      </>
    );
};

export default NavMenu;
