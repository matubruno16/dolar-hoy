
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Calculadora from './components/Calculadora';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />} />
        <Route
          path="/calculadora"
          element={<Calculadora />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
