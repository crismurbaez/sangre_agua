import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './Components/Navbar/navbar.jsx';
import Footer from './Components/footer/footer.jsx';
import Inicio from './Pages/Inicio/inicio.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='*' element={<Navigate to='/' />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
