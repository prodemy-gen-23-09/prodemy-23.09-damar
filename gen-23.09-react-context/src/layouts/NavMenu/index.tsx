import { IconContext } from "react-icons";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import { Button, IconButton, IconLinkButton } from "../../components/Button";
import { Link } from "react-router-dom";

interface NavMenuProps {
  isLoggedIn: boolean;
  handleRegister?: () => void;
}

const NavMenu = ({ isLoggedIn }: NavMenuProps) => {
  if (isLoggedIn)
    return (
      <IconContext.Provider value={{ size: "100%" }}>
        <nav className="flex flex-row items-center gap-x-3">
          <IconLinkButton
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
          <IconLinkButton
            icon={<AiOutlineShoppingCart />}
            to={`/cart`}
            title="cart"
            className="h-8 self-center md:h-10"
          />
          <IconLinkButton
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

  return (
    <nav className="flex flex-row items-center gap-x-3">
      <Link to="/login" >
        <Button variant="primary" className="w-32">
          Masuk{" "}
        </Button>
      </Link>
      <Link to="/register">
        <Button variant="outline" className="w-24">
          Daftar
        </Button>
      </Link>
    </nav>
  );
};

export default NavMenu;
