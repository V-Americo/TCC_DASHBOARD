import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './assets/components/sidebar';
import Dashboard from './pages/dashboard';
import ServicosTodos from './pages/servicosTodos';
import User from './pages/user';
import Operador from './pages/operadorScreens/operador';
import OperadorServico from './pages/operadorScreens/operadorServico'
import ServicoAceito from './pages/operadorScreens/servicoAceito';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

function Layout() {
  const location = useLocation();

  // Define em quais rotas a Sidebar deve aparecer
  const showSidebar = !['/operador','/operadorServico','/servicoAceito','/', '/register'].includes(location.pathname);
  const backgroundColor = location.pathname === '/' || location.pathname === '/register' ? 'white' : '#12121E';


  return (
    <div style={{ display: 'flex', backgroundColor }}>
      {showSidebar && <Sidebar />}
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/servicos" element={<ServicosTodos />} />
          <Route path="/user" element={<User />} />
          <Route path="/operador" element={<Operador />} />
          <Route path="/operadorServico" element={<OperadorServico />} />
          <Route path="/servicoAceito" element={<ServicoAceito />} />


        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
