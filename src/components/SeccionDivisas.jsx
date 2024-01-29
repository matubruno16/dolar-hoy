import { useFetch } from "/src/useFetch.js";
import { Divisa } from "./Divisa";
import { useFetchEuro } from "../useFetchEuro";

export const SeccionDivisas = () => {
  const { data, loading } = useFetch("https://dolarapi.com/v1/dolares");
  const { bancoNacion } = useFetchEuro("https://www.dolarsi.com/api/api.php?type=euro");
  const numColsInXL = (data && data.length + 1) % 3 === 0 ? 3 : 2;
  return (
    <main className="w-[80%] md:w-[90%] max-w-[1440px] mx-auto lg:pt-10 text-pretty ">
      <h2 className="flex text-4xl lg:text-5xl py-6 justify-center text-center text-gray uppercase">Cotización del dólar hoy</h2>

      <section className={`py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-${numColsInXL} w-full justify-items-center mx-auto box-border gap-4`}>
        {loading && <h2>Cargando...</h2>}
        {data?.map((divisa, index) => (
          <Divisa
            nombre={divisa.nombre}
            compra={divisa.compra}
            venta={divisa.venta}
            fechaActualizacion={divisa.fechaActualizacion}
            key={`${divisa.casa.nombre}--${index}`}
          />
        ))}
        {bancoNacion && bancoNacion.casa && (
          <Divisa
            nombre={`Euro - ${bancoNacion.casa.nombre}`}
            compra={bancoNacion.casa.compra}
            venta={bancoNacion.casa.venta}
            key={`${bancoNacion.casa.nombre}`}
          />
        )}
      </section>
    </main>
  );
};
