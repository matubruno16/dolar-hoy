import { Header } from "./components/Header"
import { SeccionDivisas } from "./components/SeccionDivisas"

function App() {
  return (
    <main className=" min-h-dvh min-w-full  inset-0	 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Header />
      <SeccionDivisas />
    </main>
  )
}

export default App
