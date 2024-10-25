import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import ServicosTodos from './pages/servicosTodos';
import User from './components/user';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/servicos" element={<ServicosTodos />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
