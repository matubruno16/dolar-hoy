import { useState } from "react";

import { IconMenu } from "./IconMenu";


const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
 

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const links = [
    { link: "Dólar Oficial", id: 1 },
    { link: "Dólar Blue", id: 2 },
    { link: "Dólar Turista", id: 3 },
    { link: "Otras Divisas", id: 4 },
  ];

  return (
    <nav
      className={`flex w-screen p-3 md:justify-center justify-start bg-black/20 backdrop-blur-sm  ${!isMenuOpen ? "pl-6 pt-6" : " fixed h-full w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex flex-col justify-start pl-6 pt-6 " }`}
    >
    <div className="flex md:hidden ">
      <IconMenu
        handleMenuClick={handleMenuClick}
      />
    </div>

      <div className="hidden md:inline-flex text-md">
        {!isMenuOpen &&
          links.map((l) => (
            <a
              onClick={() => setMenuOpen(false)}
              className=" max-w-max  text-white text-xl lg:text-2xl py-3 hover:cursor-pointer hover:border-b-2 hover:border-b-white transition-all delay-100 duration-200 ease-in-out uppercase mx-5 "
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
        hover:border-b-4 hover:border-b-white hover:transition-all duration-300 uppercase "
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


