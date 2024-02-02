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
      className={`  ${!isMenuOpen ? "flex w-screen p-3 justify-between md:justify-around bg-divisa backdrop-blur-sm items-center justify-items-center px-6 pl-6 " : " fixed h-full w-full  bg-divisa flex flex-col justify-start pl-6 pt-6"}`}
    >

      <a 
        className={`${isMenuOpen ? "hidden" : ""} `}       
        title="Dolar Hoy- Cotizaciones del dia. Dolar / Euro"
        href="/">
          <img
            src={logoDolarHoy}
            alt="Icono Dolar Hoy"
            width={85}
            height={40}
          />

      </a>
      <div className={`${isMenuOpen ? "flex md:hidden pb-10" : "md:hidden"}`}>

        <IconMenu
          handleMenuClick={handleMenuClick}
          
        />
      </div>

      <div className="hidden md:inline-flex text-md">

        {!isMenuOpen &&
          links.map((l) => (
            <a
              onClick={() => setMenuOpen(false)}
              className=" max-w-max font-semibold text-primario text-xl lg:text-2xl  hover:cursor-pointer hover:scale-110 transition-all delay-100 duration-200 ease-in-out uppercase ml-3 lg:mx-3 xl:mx-5 "
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
            className="max-w-max text-primario text-3xl text-left hover:cursor-pointer hover:scale-110 transition-all delay-100 duration-200 uppercase py-10 "
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


