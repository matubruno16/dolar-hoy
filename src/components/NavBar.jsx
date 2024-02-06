import { useState } from "react";
import logoDolarHoy from "../assets/dolarHoy.png";
import { IconMenu } from "./IconMenu";
import { Link } from "react-router-dom";



const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);


  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const classLinkIsOpen = "max-w-max font-semibold text-primario text-xl text-4xl mt-6 hover:cursor-pointer hover:scale-110 transition-all delay-100 duration-200 ease-in-out uppercase ml-3 lg:mx-3 xl:mx-5 ";

  const classLinkNotOpen = "max-w-max flex items-center justify-center text-primario font-semibold text-2xl text-left hover:cursor-pointer hover:scale-110 transition-all delay-100 duration-300 uppercase mx-6 ";

  return (
    <nav
      className={`  ${!isMenuOpen ? "w-full flex p-3 justify-between md:justify-around bg-divisa backdrop-blur-sm items-center justify-items-center px-6 pl-6 " : " fixed  h-full w-full  bg-divisa flex flex-col justify-start px-6 pt-6"}`}
    >
      <div className={`${!isMenuOpen ? "w-full flex items-center justify-between" : "flex items-center justify-between"}`}>


        <a
          className={`${isMenuOpen ? "" : ""} `}
          title="Dolar Hoy- Cotizaciones del dia. Dolar / Euro"
          href="/">
          <img
            src={logoDolarHoy}
            alt="Icono Dolar Hoy"
            width={85}
            height={40}
          />

        </a>
        <div className={`${isMenuOpen ? "flex md:hidden " : "md:hidden"}`}>

          <IconMenu
            handleMenuClick={handleMenuClick}

          />
        </div>
      </div>
      <div className={`${!isMenuOpen ? "md:flex hidden" : "md:hidden flex flex-col "}`}>
        <Link
          to="/"
          title="Inicio cotizaciones"
          onClick={() => setMenuOpen(false)}
          className={`${isMenuOpen ? classLinkIsOpen : classLinkNotOpen}`}
        >Cotizaciones
        </Link>
        <Link
          to="calculadora"
          title="Calculadora"
          onClick={() => setMenuOpen(false)}
          className={`${isMenuOpen ? classLinkIsOpen : classLinkNotOpen}`}
        >Calculadora
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;


