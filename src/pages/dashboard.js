// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/sidebar';
import Card from '../components/card';
import Graficos from '../components/graficos';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Análises De Solicitações</h1>
        <div className="cards-container">
          <Card />
          <div className='graficos-wrapper'>

            <div className="card-grafico">
              <Graficos title="Serviços Completos - Semana" type="line" />
            </div>
            <div className="card-grafico">
              <Graficos title="Serviços Completos - Mês" type="pie" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
