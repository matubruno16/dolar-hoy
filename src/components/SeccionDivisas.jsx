
import { useFetch } from "/src/assets/useFetch.js";
import { Divisa } from "./Divisa";


export const SeccionDivisas = () => {

  const { data, loading } = useFetch("https://dolarapi.com/v1/dolares");


  return (
    <main className="w-[90%] md:w-[80%] max-w-[1440px] mx-auto lg:pt-10 text-pretty">
      <h2 className=" flex text-5xl py-12 justify-center text-center text-gray uppercase ">Cotización del dólar hoy</h2>

      <section className="py-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full  justify-items-center">
        
          {loading && <h2>Cargando...</h2>}
          {data?.map((divisa, index) => (
            <Divisa
              nombre={divisa.nombre}
              compra={divisa.compra}
              venta={divisa.venta}
              fechaActualizacion={divisa.fechaActualizacion}
              key={`${index}+${divisa.casa.nombre}`}>
            </Divisa>
          ))
          }
        

      </section>

    </main>
  )
}

