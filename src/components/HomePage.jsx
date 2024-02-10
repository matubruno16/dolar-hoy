import { SeccionDivisas } from './SeccionDivisas'

const HomePage = () => {
  return (
    <main className=" flex flex-col  min-h-dvh min-w-full bg-[#EEF5FF]">    
    <h1 className="hidden">
    Cotización del Dólar y Euro en Tiempo Real - Argentina
    </h1>
    
    <SeccionDivisas />
  
    </main>
  )
}

export default HomePage;