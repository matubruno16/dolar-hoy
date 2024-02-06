
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Calculadora from './components/Calculadora';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
