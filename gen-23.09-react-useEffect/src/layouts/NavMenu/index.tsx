import { IconContext } from "react-icons";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import { IconButton, LinkButton } from "../../components/Button";

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
          <LinkButton
            icon={<AiOutlineHeart />}
            to={`/wishlist`}
            title="wishlist"
            className="hidden md:block md:h-10"
          />
          <IconButton
            icon={<AiOutlineSearch />}
            title="search"
            className="h-8 md:hidden"
          />
          <LinkButton
            icon={<AiOutlineShoppingCart />}
            to={`/cart`}
            title="cart"
            className="h-8 md:h-10 self-center"
          />
          <LinkButton
            icon={<AiOutlineUser />}
            to="/profile"
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
    );
  else
    return (
      <nav className="flex flex-row items-center gap-x-3">
        <button
          className="h-full w-24 self-center rounded-xl p-2 font-semibold text-primary outline outline-1 outline-secondary hover:bg-accent hover:text-white md:hover:cursor-pointer"
          onClick={handleLogin}
        >
          Masuk
        </button>
        <button className="h-full w-24 self-center rounded-xl bg-primary p-2 font-semibold text-white hover:bg-accent md:hover:cursor-pointer">
          Daftar
        </button>
      </nav>
    );
};

export default NavMenu;
