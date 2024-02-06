import { useFetch } from "/src/useFetch.js";
import { Divisa } from "./Divisa";
import { useFetchEuro } from "../useFetchEuro";

export const SeccionDivisas = () => {
  const { data, loading } = useFetch("https://dolarapi.com/v1/dolares");
  const { dataE, loadingE } = useFetchEuro("https://dolarapi.com/v1/cotizaciones/eur");
  const numColsInXL = (data && data.length) % 2 === 0 ? 3 : 2;

  return (
    <main className="w-[80%] max-w-[1440px] mx-auto text-pretty ">
      <h2 className="flex text-3xl font-extrabold lg:text-4xl py-6 justify-center text-center text-transparent bg-clip-text bg-textHeading "
      >Cotización del dólar hoy
      </h2>

      <section className={`py-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-${numColsInXL} w-full justify-items-center mx-auto box-border gap-4`}>
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
        {loadingE && <h2>Cargando...</h2>}
        {dataE && (
          <Divisa
            nombre={dataE.nombre}
            compra={dataE.compra}
            venta={dataE.venta}
            fechaActualizacion={dataE.fechaActualizacion}
            key={`${dataE.casa.nombre}`}
          />
        )}
      </section>
    </main>
  );
};
