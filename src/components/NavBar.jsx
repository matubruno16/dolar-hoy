import { useState } from "react";
import logoDolarHoy from "../assets/dolarHoy.png";
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
      className={`flex w-screen p-3 md:justify-center justify-start bg-divisa backdrop-blur-sm  ${!isMenuOpen ? "pl-6 pt-6" : " fixed h-full w-full  bg-divisa flex flex-col justify-start pl-6 pt-6 "}`}
    >

      <a 
        title="Dolar Hoy- Cotizaciones del dia. Dolar / Euro"
        href="/">
          <img
            src={logoDolarHoy}
            alt="Icono Dolar Hoy"
            width={100}
          />

      </a>

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
              className=" max-w-max font-semibold text-primario text-xl lg:text-2xl py-3 hover:cursor-pointer hover:scale-110 transition-all delay-100 duration-200 ease-in-out uppercase mx-5 "
              to={l.link}
              key={l.id}
              href="/"
              title={l.link}
            >
              {l.link}
            </a>
          ))}
      </div>

      {isMenuOpen &&
        links.map((l) => (
          <a
            onClick={() => setMenuOpen(false)}
            className="max-w-max text-primario text-3xl text-left my-5 hover:cursor-pointer hover:scale-110 hover:transition-all duration-300 uppercase "
            to={l.link}
            key={l.id}
            href="/"
            title={l.link}
          >
            {l.link}
          </a>
        ))}




    </nav>
  );
};

export default NavBar;


