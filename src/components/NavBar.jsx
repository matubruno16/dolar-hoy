import { useState, useEffect } from "react";

import { IconMenu } from "./IconMenu";


const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const links = [
    { link: "Dólar Oficial", id: 1 },
    { link: "Dólar Blue", id: 2 },
    { link: "Dólar Turista", id: 3 },
    { link: "Otras Divisas", id: 4 },
  ];


  const navbarBackground = scrollPosition > 600 ? "bg-BackgroundHome" : "bg-transparent";

  const renderLinks = () => (
    <div className="hidden lg:flex ">{!isMenuOpen &&
      links.map((l) => (
        <a
          className="text-white font-bold  text-lg mx-4 align-middle hover:cursor-pointer border-b
          border-b-transparent hover:border-b hover:border-b-white hover:transition-all duration-200 ease-in-out uppercase "
          key={l.id}
        >
          {l.link}
        </a>
      ))}
    </div>
  );

  const renderMenuLinks = () => (
    isMenuOpen &&
    links.map((l) => (
      <a
        onClick={() => setMenuOpen(false)}
        className="max-w-max text-white text-3xl text-left my-5 hover:cursor-pointer
        hover:border-b-4 hover:border-b-white hover:transition-all duration-300 uppercase h-min"
        to={l.link}
        key={l.id}
      >
        {l.link}
      </a>
    ))
  );

  return (
    <nav
      className={` flex w-screen p-3 lg:justify-center justify-start  ${navbarBackground} ${!isMenuOpen ? "pl-6 pt-6 " : "h-screen  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex flex-col justify-start pl-6 pt-6"
        }`}
    >
      <IconMenu
        handleMenuClick={handleMenuClick}
      />

      <div className="hidden lg:inline-flex ">
        {!isMenuOpen &&
          links.map((l) => (
            <a
              onClick={() => setMenuOpen(false)}
              className="max-w-max text-white text-2xl py-3 hover:cursor-pointer hover:border-b-2 hover:border-b-white transition-all delay-100 duration-200 ease-in-out uppercase mx-5"
              to={l.link}
              key={l.id}
            >
              {l.link}
            </a>
          ))}
      </div>
      {isMenuOpen &&
        links.map((l) => (
          <a
            onClick={() => setMenuOpen(false)}
            className="max-w-max text-white text-3xl text-left my-5 hover:cursor-pointer
        hover:border-b-4 hover:border-b-white hover:transition-all duration-300 uppercase h-min"
            to={l.link}
            key={l.id}
          >
            {l.link}
          </a>
        ))}




    </nav>
  );
};

export default NavBar;


