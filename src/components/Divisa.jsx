import { format } from "date-fns";
import { es } from "date-fns/locale";

export const Divisa = ({ nombre, compra, venta, fechaActualizacion }) => {
  return (
    <article className=" flex flex-col bg-slate-400 rounded-lg shadow-md p-4 min-w-[370px] max-w-[500px] xl:max-w-[700px] text-center box-border m-2">
      <h2 className="text-xl 2xl:text-2xl font-bold uppercase text-purple flex  justify-center mb-3">{nombre}</h2>
      <div className="text-gray-700  font-semibold text-[19px]">
        <div className="flex items-center justify-around mb-2 ">
          <p>Compra: <span className="font-bold text-purple-dark">${compra}</span></p>
          <p>Venta: <span className="font-bold text-purple-dark">${venta}</span></p>
        </div>
        <p className="flex justify-center mb-2">Actualizado:
          <span className="font-bold text-purple-dark"> {format(new Date(fechaActualizacion), 'dd/MM/yyyy H:mm',
            { locale: es })} hs.</span>
          
        </p>
      </div>
    </article>
  );
};