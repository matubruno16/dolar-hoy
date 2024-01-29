/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const Divisa = ({ nombre, compra, venta, fechaActualizacion }) => {
  return (
    <article className=" flex flex-col box-border bg-hero bg-cover  rounded-lg shadow-md p-4 min-w-[300px] max-w-[450px] md:w-full text-center m-2">
      <h2 className="text-md text-xl 2xl:text-2xl font-bold uppercase text-white flex justify-center mb-3">{nombre}</h2>
      <div className="text-gray-1x00  font-semibold text-md lg:text-[19px]">
        <div className="flex items-center justify-around mb-2 text-gris">
          <p>Compra: <span className="font-bold text-white">${compra}</span></p>
          <p>Venta: <span className="font-bold text-white">${venta}</span></p>
        </div>
        <p className="flex justify-center mb-2">Actualizado:
          <span className="font-bold text-white"> 
          {fechaActualizacion ? format(new Date(fechaActualizacion), 'dd/MM/yyyy H:mm', { locale: es }) + ' hs.' : 'Fecha no disponible'}</span>
          
        </p>
      </div>
    </article>
  );
};
