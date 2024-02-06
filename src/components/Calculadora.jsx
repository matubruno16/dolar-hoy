import { useState } from 'react';
import { useFetch } from '../useFetch';

const Calculadora = () => {
  const [cantidadP, setCantidadP] = useState('');
  const [selectedOpcion, setSelectedOpcion] = useState('oficial');
  const { data, loading, error } = useFetch("https://dolarapi.com/v1/dolares");
  const [resultado, setResultado] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');


  const formatCant = (cant) => parseFloat(cant).toLocaleString('es-AR');

  const convertDivisa = () => {
    if (loading) {
      console.log("Espera a que se carguen los datos...");
      return;
    }

    if (error) {
      console.error(`Error al cargar los datos: ${error.message}`);
      return;
    }

    const divisaSelect = data.find((divisa) => divisa.casa === selectedOpcion);

    if (!isNaN(cantidadP) && divisaSelect) {
      const { venta, moneda, nombre } = divisaSelect;

      const cantidadFormateado = formatCant(cantidadP);
      const resultadoConvertido = parseFloat(cantidadP) / venta;

      setResultado(
        `$${cantidadFormateado} Pesos Argentinos son ${resultadoConvertido.toFixed(2)} ${moneda} ${nombre}`
      );
    }
  };

  const validarCampoEntrada = () => {
    if (!cantidadP.trim()) {
      setErrorMessage("Por favor, introduce un número válido.");
      return false;
    }
    return true;
  };
  
  const handleConvertirClick = () => {
    if (!validarCampoEntrada()) return;
    convertDivisa();
  };
  
  const handleEnterKeyDown = (event) => {
    if (!validarCampoEntrada()) return;
    if (event.key === 'Enter') {
      convertDivisa();
    }
  };
  

  return (
    <main className='min-h-dvh min-w-full bg-[#EEF5FF]'>
      {loading && <h2>Cargando...</h2>}
      {error && <p>Error al cargar los datos: {error.message}</p>}

      <h2 className="flex text-3xl font-extrabold lg:text-4xl py-6 justify-center text-center text-transparent bg-clip-text bg-textHeading">Calculadora de conversión de monedas</h2>

      <section className='grid md:w-[80%] mx-auto mt-20 gap-6 place-content-center place-items-center px-10 md:px-0'>
        <div className='w-[90%]'>

          <label className='mb-2 text-base font-medium text-gray-900'>
            Pesos a Convertir:
            <input
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3 '
              type="number"
              id="input-calculadora"
              value={cantidadP}
              onChange={(e) => {
                setCantidadP(e.target.value);
                setErrorMessage('');
              }}
              onKeyDown={handleEnterKeyDown}
            />
          </label>




          <label
            className='mb-2 text-base font-medium text-gray-900 '
          >
            Convertir a
            <select
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3 '
              value={selectedOpcion}
              onChange={(e) => { setSelectedOpcion(e.target.value) }}>
              {data && data.map((divisa) => (
                <option
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-base font-semibold'
                  key={divisa.casa}
                  value={divisa.casa}>
                  {divisa.nombre}
                </option>
              ))}
            </select>
          </label>
          <div className='flex flex-col justify-center items-center'>

            <button
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-auto px-5 mt-4 py-3 text-center'
              onClick={handleConvertirClick}
              disabled={loading}>
              Convertir
            </button>
          </div>
        </div>
        {errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : resultado && (
          <div className="flex flex-col items-center justify-center box-border bg-divisa rounded-lg shadow-md p-4 w-full text-center m-2">
            <p className="text-lg">{resultado}</p>
          </div>
        )}


      </section>
    </main>
  );
};

export default Calculadora;
