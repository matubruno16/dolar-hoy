
import NavBar from "./components/NavBar"
import { SeccionDivisas } from "./components/SeccionDivisas"

function App() {
  return (
    <main className=" min-h-dvh min-w-full ">
    <h1 className="hidden">
    Cotización del Dólar y Euro en Tiempo Real - Argentina
    </h1>
      <NavBar />
      <SeccionDivisas />
    </main>
  )
}

export default App
