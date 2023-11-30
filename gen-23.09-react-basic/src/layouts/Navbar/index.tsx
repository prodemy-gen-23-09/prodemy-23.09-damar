const Navbar = () => {
  return (
    <header className="flex flex-row sticky top-0 left-0 z-10 w-full bg-white justify-between md:justify-start items-center border border-x-transparent border-t-transparent py-4 md:py-6 px-3 md:px-4 lg:px-10 xl:px-12 gap-x-5 md:gap-x-8">
      <img
        src="/assets/back-arrow.png"
        className="h-8 md:hidden"
        alt="back-arrow"
      />
      <img
        src="/assets/Tokopedia-logo.svg"
        className="hidden md:block md:h-10"
        alt="logo"
      />
      <input
        name="search"
        className="hidden md:block flex-1 h-fit px-5 py-2 outline outline-1 outline-gray-300 rounded-lg"
        placeholder="Cari di tokokami"
      />
      <nav className="flex flex-row items-center gap-x-5 md:gap-x-8">
        <img
          src="/assets/wishlist.png"
          alt="wishlist"
          className="hidden md:block md:h-10"
        />
        <img src="/assets/search.png" alt="search" className="h-7 md:hidden" />
        <img src="/assets/shopping-cart.png" alt="cart" className="h-8 md:h-10" />
        <img
          src="/assets/profile.png"
          alt="profile"
          className="hidden md:block md:h-10"
        />
        <img src="/assets/menu.png" className="h-8 md:hidden" alt="menu" />
      </nav>
    </header>
  );
};

export default Navbar;
