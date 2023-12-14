import { ChangeEvent, useState } from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

import { IconContext } from "react-icons";
import { AiOutlineArrowLeft } from "react-icons/ai";

import NavMenu from "../NavMenu";
import { IconButton } from "../../components/Button";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.accessToken !== "",
  );

  const navigate = useNavigate();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate({
      pathname: `/search`,
      search: createSearchParams({
        q: searchValue,
      }).toString(),
    });
  };

  return (
    <header className="sticky left-0 top-0 z-10 flex w-full flex-row items-center justify-between gap-x-5 border border-x-transparent border-t-transparent bg-white px-3 py-4 md:justify-start md:gap-x-8 md:px-4 md:py-6 lg:px-10 xl:px-12">
      <IconContext.Provider value={{ size: "100%" }}>
        <IconButton
          icon={<AiOutlineArrowLeft />}
          title="back-arrow"
          className="h-8 md:hidden"
        />
      </IconContext.Provider>
      <h2 className="hidden h-fit self-center text-3xl font-bold text-primary hover:cursor-pointer md:block">
        <Link to={"/"}> tokoungu </Link>
      </h2>
      <form onSubmit={handleOnSubmit} className="hidden flex-1 md:block">
        <input
          name="search"
          className="h-fit w-full rounded-lg border border-gray-300 px-5 py-2"
          placeholder="Cari di tokokami"
          value={searchValue}
          onChange={handleOnChange}
        />
      </form>
      <NavMenu isLoggedIn={isLoggedIn} />
    </header>
  );
};

export default Header;
