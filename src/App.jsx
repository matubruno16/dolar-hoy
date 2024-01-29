import { Header } from "./components/Header"
import { SeccionDivisas } from "./components/SeccionDivisas"

function App() {
  return (
    <main className="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Header />
      <SeccionDivisas />
    </main>
  )
}

export default App
