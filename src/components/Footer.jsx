import logoDolarHoy from "../assets/logoDolarHoy.png"

export const Footer = () => {
  return (
    <footer
      className=" bg-divisa py-4 bg-white">
      <a href="/">
        <img
          title="Logo Dolar Hoy"
          src={logoDolarHoy}
          alt="Logo Dolar Hoy"
          
          height={70}
          className="h-16 mx-auto mb-4"  />
      </a>
      <p className="text-center text-gray-400">
        © {(new Date().getFullYear())} Dolar Hoy - Todos los derechos reservados<br />
        Desarrollado por: <a href="https://matiasbrunodev.vercel.app/" target="_blank" rel="noreferrer">Matias Bruno</a>
      </p>
    </footer>
  )
}
