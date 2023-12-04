import { ChangeEvent, useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchValue);
  };

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
      <form onSubmit={handleOnSubmit} className="hidden md:block flex-1">
        <input
          name="search"
          className="w-full h-fit px-5 py-2 outline outline-1 outline-gray-300 rounded-lg"
          placeholder="Cari di tokokami"
          value={searchValue}
          onChange={handleOnChange}
        />
      </form>
      <IconContext.Provider value={{ size: "100%" }}>
        <nav className="flex flex-row items-center gap-x-5">
          {isLoggedIn ? (
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
          ) : (
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
          )}
        </nav>
      </IconContext.Provider>
    </header>
  );
};

export default Navbar;
